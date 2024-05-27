export const getUserAvatar = (userId, avatar) =>
  `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`;

export const HL_KEY = "WEBHOOK_URL_HL";
export const NEB_KEY = "WEBHOOK_URL_NEB";

const HL_SERVER_ID = "1231315020990648341";
const NEB_SERVER_ID = "1207413375391236167";

export const webhookObj = {
  [HL_SERVER_ID]: process.env[HL_KEY],
  [NEB_SERVER_ID]: process.env[NEB_KEY],
};

// HalfLife, Neb
export const SERVERS = [HL_SERVER_ID, NEB_SERVER_ID];

export const TEST_CHANNEL_HL = "1244617612193960010";
export const TEST_CHANNEL_BOT = "1244617566756802630";

export const ALLOWED_CHANNELS = [TEST_CHANNEL_HL, TEST_CHANNEL_BOT];
