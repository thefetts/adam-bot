## Running the Bot
1. Install Node with: `brew install node` on a Mac, something less fun elsewhere
1. `npm install`
1. Ensure environment variables are set (see below)
1. `node app/bot.js`

## Running tests
1. `npm test`

## Setting up the environment
The app currently needs two pieces of information from the environment:
1. Discord server token:

   `export token=YOUR_VALID_TOKEN`
1. MySQL connection url. This one is a touch more complicated for now, as it's set automatically by CloudFoundry, so setting it locally looks like this:

   `export VCAP_SERVICES="{\"p-mysql\":[{\"credentials\":{\"uri\":\"YOUR_VALID_URI\"}}]}"`
