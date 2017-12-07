const Discord = require('discord.js');
const Adamism = require('./adamism.js');
const MarkovChain = require('./markov_chain.js');

module.exports = class Adam {
  constructor(authToken, dbUri) {
    this.authToken = authToken;

    this.allAdamisms = [];
    this.availableAdamisms = [];
    this.recentMessages = {};

    this.adam = new Discord.Client();
    this.adamism = new Adamism(dbUri);
  }

  wakeUp() {
    this.adamism.findAll((allAdamisms => {
      this.allAdamisms = allAdamisms;
      this.markovChain = new MarkovChain(...allAdamisms);

      this.setListeners();
      this.adam.login(this.authToken);
    }));
  }

  setListeners() {
    this.adam.on('message', msg => {
      let text = msg.content.toLowerCase();
      if (text.startsWith('!adam save that')) {
        this.saveThat(msg);
      } else if (text.startsWith('!adam generate')) {
        this.sendMessage(msg, this.markovChain.speak());
      } else if (text.startsWith('!adam')) {
        this.sendMessage(msg, this.getRandomMessage());
      } else if (msg.author.username === 'TastyMeaty') {
        this.recentMessages[msg.channel.name] = msg.content;
      }
    });

    this.adam.on('ready', () => {
      console.log('WOKE UP AND READY TO ROCK');
    });
  }

  saveThat(msg) {
    const message = this.recentMessages[msg.channel.name];
    if (message) {
      this.adamism.create({message: message}, () => {
        this.allAdamisms.push(message);
        this.sendMessage(msg, `"${message}" saved to adam-bot!`);
        this.recentMessages[msg.channel.name] = '';
      });
    } else {
      this.sendMessage(msg, `I AIN'T GOT SHIT TO SAVE DUMMY`)
    }
  }

  getRandomMessage() {
    if (!this.availableAdamisms.length)
      this.availableAdamisms = this.allAdamisms.slice(0);

    const index = getRandomIndex(this.availableAdamisms);
    return this.availableAdamisms.splice(index, 1)[0];
  }

  sendMessage(msg, text) {
    console.log(text);
    msg.channel.sendMessage(text);
  }
};

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
