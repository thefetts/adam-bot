const Adam = require('./adam.js');

const dbUri = process.env.DATABASE_URL;
const authToken = process.env.DISCORD_TOKEN;
const chaosMode = process.env.chaosMode;
const delay = process.env.delay;

new Adam(authToken, dbUri, chaosMode, delay).wakeUp();
