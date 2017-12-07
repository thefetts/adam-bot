const Adam = require('./adam.js');

const vcap_services = JSON.parse(process.env.VCAP_SERVICES);
const dbUri = vcap_services['p-mysql'][0].credentials.uri;
const authToken = process.env.token;
const chaosMode = process.env.chaosMode;
const delay = process.env.delay;

new Adam(authToken, dbUri, chaosMode, delay).wakeUp();
