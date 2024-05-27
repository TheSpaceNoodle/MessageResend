import { WebhookClient } from "discord.js";
import {
  ALLOWED_CHANNELS,
  SERVERS,
  getUserAvatar,
  webhookObj,
} from "./constants.mjs";

export const messageSendHandler = (message) => {
  try {
    if (message.author.bot || !ALLOWED_CHANNELS.includes(message.channelId))
      return;

    SERVERS.filter((serverId) => serverId !== message.guildId).map(
      async (serverId) => {
        const webhookClient = new WebhookClient({ url: webhookObj[serverId] });

        await webhookClient.send({
          content: message.content,
          username: message.author.globalName,
          avatarURL: getUserAvatar(message.author.id, message.author.avatar),
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};
