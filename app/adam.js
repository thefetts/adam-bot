const Discord = require('discord.js');

module.exports = class Adam {
  constructor(allAdamisms) {
    this.adam = new Discord.Client();
    this.allAdamisms = allAdamisms;
    this.availableAdamisms = [];
  }

  wakeUp() {
    this.adam.on('message', msg => {
      if (msg.content.toLowerCase().startsWith("!adam")) {
        msg.channel.sendMessage(this.getRandomMessage());
      }
    });

    this.adam.on('ready', () => {
      console.log('WOKE UP AND READY TO ROCK');
    });

    this.adam.login(process.env.token);
  }

  getRandomMessage() {
    if(!this.availableAdamisms.length)
      this.availableAdamisms = this.allAdamisms.slice(0);

    const index = Adam.getRandomIndex(this.availableAdamisms);
    return this.availableAdamisms.splice(index, 1)[0];
  }

  static getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }
};
