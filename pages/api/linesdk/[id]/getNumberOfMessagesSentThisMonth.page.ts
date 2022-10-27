import { configClient } from "app/libs/configClient";
import { getNumberOfMessagesSentThisMonth } from "app/message/api/getNumberOfMessagesSentThisMonth";
import type { NextApiRequest, NextApiResponse } from "next";

const getnumberOfMessagesSentThisMonth = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const client = await configClient(id as string);
    try {
      if (client) {
        const data = await getNumberOfMessagesSentThisMonth(client);
        res.status(200).json(data);
      }
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  }
};

export default getnumberOfMessagesSentThisMonth;