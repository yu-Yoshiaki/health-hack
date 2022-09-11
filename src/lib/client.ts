const line = require("@line/bot-sdk");

import type { Client } from "@line/bot-sdk";

export const client: Client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
  channelSecret: process.env.CHANNEL_SECRET as string,
});
