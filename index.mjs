import { Client, Events, IntentsBitField } from "discord.js";
import { messageSendHandler } from "./messageSendHandler.mjs";
import { keepAlive } from "./keepAlive.mjs";

const clientParams = {
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessages,
  ],
};

const client = new Client(clientParams);

client.on(Events.MessageCreate, messageSendHandler);

client.login(process.env.TOKEN);
keepAlive();
