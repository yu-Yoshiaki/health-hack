import type { NextApiRequest, NextApiResponse } from "next";
import { createAccessToken } from "src/pages/api/lib/createAccessToken";
import type { LiffAppData } from "src/pages/api/lib/createLiffApp";
import { createLiffApp } from "src/pages/api/lib/createLiffApp";
import { getBotInfo } from "src/pages/api/lib/getBotInfo";
import { setWebhookUrl } from "src/pages/api/lib/setWebhookUrl";
import { supabaseServer } from "src/pages/api/lib/supabase";
import type { definitions } from "src/type/supabase";

const createConfig = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id } = req.query;
    const { apiChannelId, apiChannelSecret, liffChannelId, liffChannelSecret } =
      req.body;

    try {
      const apiChannelAccessToken = await createAccessToken(
        apiChannelId,
        apiChannelSecret
      );
      const liffAccessToken = await createAccessToken(
        liffChannelId,
        liffChannelSecret
      );

      await setWebhookUrl(id as string, apiChannelAccessToken);
      const botInfo = await getBotInfo(apiChannelAccessToken);
      const liffAppData: LiffAppData = {
        view: {
          type: "full",
          url: "https://lplus.vercel.app/liff",
        },
        description: "Test Liff App",
        permanentLinkPattern: "concat",
        scope: ["profile", "chat_message.write"],
        botPrompt: "none",
      };

      const liffId = await createLiffApp(liffAccessToken, liffAppData);

      const { error } = await supabaseServer
        .from<definitions["OwnerInfomation"]>("OwnerInfomation")
        .insert({
          id: id as string,
          apiChannelId,
          apiChannelSecret,
          apiChannelAccessToken,
          liffChannelId,
          liffChannelSecret,
          liffAccessToken,
          liffId,
          webhookUrl: `https://lplus.vercel.app/api/webhook/${id as string}`,
          basicId: botInfo.basicId,
          pictureUrl: botInfo.pictureUrl,
        });

      if (error) {
        throw new Error(error.message);
      }
      res.status(200).json({ status: "success" });
    } catch (err: any) {
      res.status(500).json({ status: err.message });
    }
  }
};

export default createConfig;
