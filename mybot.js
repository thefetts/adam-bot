const Discord = require('discord.js');
const Sequelize = require('sequelize');

const bot = new Discord.Client();

const vcap_services = JSON.parse(process.env.VCAP_SERVICES);
const sequelize = new Sequelize(vcap_services['p-mysql'][0].credentials.uri);

const Adamism = sequelize.define(
  'adamism',
  {message: {type: Sequelize.TEXT}},
  {freezeTableName: true}
);

let allAdamisms = [];
let availableAdamisms = [];
Adamism.sync().then(function () {
  Adamism.findAll().then(adamisms => {
    allAdamisms = adamisms.map(adamism => adamism.message);
  });
});

const getRandomMessage = () => {
  if (!availableAdamisms.length)
    availableAdamisms = allAdamisms.slice(0);

  const index = getRandomIndex(availableAdamisms);
  return availableAdamisms.splice(index, 1)[0];
};

const getRandomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

bot.on('message', msg => {
  if (msg.content.toLowerCase().startsWith("!adam")) {
    msg.channel.sendMessage(getRandomMessage());
  }
});

bot.on('ready', () => {
  console.log('ready');
});

bot.login(process.env.token);
