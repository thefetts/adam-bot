const proxyquire = require('proxyquire');
let Adam;
let mockClient;
let mockAdamism;
let mockMarkovChain;

let message;
let messageHandler;

beforeEach(() => {
  mockClient = {
    on() { },
    login() { }
  };

  mockAdamism = {
    findAll(cb) { cb(['HAHAHA']); },
    create(obj, cb) { cb(obj); }
  };

  mockMarkovChain = {
    speak() { return 'A GENERATED MESSAGE BITCHES'; }
  };

  function Adamism() {
    return mockAdamism;
  }

  function Client() {
    return mockClient
  }

  function MarkovChain() {
    return mockMarkovChain;
  }

  Adam = proxyquire('../app/adam', {
    'discord.js': {Client},
    './markov_chain.js': MarkovChain,
    './adamism.js': Adamism
  });
});

describe('Adam', () => {
  describe('wakeUp', () => {
    it('retrieves all quotes from the database', () => {
      const findAllSpy = makeFindAllSpy(['A UNIQUE QUOTE FOR THIS TEST']);
      const adam = wakeUpNewAdam();

      expect(findAllSpy).toHaveBeenCalled();
      expect(adam.getRandomMessage()).toEqual('A UNIQUE QUOTE FOR THIS TEST');
    });

    it('logs into the discord server', () => {
      let loginSpy = spyOn(mockClient, 'login');
      let token = Math.random();
      wakeUpNewAdam(token);

      expect(loginSpy).toHaveBeenCalledWith(token);
    });
  });

  describe('getRandomMessage', () => {
    it('gets a random message from the list', () => {
      makeFindAllSpy(['a']);
      const adam = wakeUpNewAdam();
      expect(adam.getRandomMessage()).toEqual('a');
    });

    it('uses unique messages until all have been used', () => {
      let quotes = ['a', 'b', 'c', 'd', 'e'];
      makeFindAllSpy(quotes);

      // Run it 100 times since without proper logic it could
      // happen to pass once or twice by chance
      for (let i = 0; i < 100; i++) {
        const adam = wakeUpNewAdam();

        // Burn 4 of the 5 messages
        const first = adam.getRandomMessage();
        const second = adam.getRandomMessage();
        const third = adam.getRandomMessage();
        const fourth = adam.getRandomMessage();

        // Filter them out of the list so we know what message has
        // not yet come through
        const lastAvailableQuote = quotes
          .find(quote => ![first, second, third, fourth]
            .includes(quote));
        expect(adam.getRandomMessage()).toEqual(lastAvailableQuote);
      }
    });
  });

  describe('event listeners', () => {
    let sendMessageSpy;
    let adam;

    beforeEach(() => {
      message = {
        content: '',
        channel: {name: '', sendMessage() {}},
        author: {username: ''}
      };

      spyOn(mockClient, 'on').and.callFake((str, cb) => {
        if (str === 'message') messageHandler = cb;
      });
      sendMessageSpy = spyOn(message.channel, 'sendMessage');

      adam = wakeUpNewAdam();
    });

    describe('!adam', () => {
      it('ignores messages that do not start with !adam', () => {
        sendMessage('anything else');
        expect(sendMessageSpy).not.toHaveBeenCalled();
      });

      it('responds to messages that start with !adam', () => {
        sendMessage('!adam');
        expect(sendMessageSpy).toHaveBeenCalledWith('HAHAHA');
      });

      ['!ADAM', '!adAM', '!AdAm', '!ADAm', '!aDaM'].forEach(msg => {
        it(`is case insensitive and works with '${msg}'`, () => {
          sendMessage(msg);
          expect(sendMessageSpy).toHaveBeenCalledWith('HAHAHA');
        });
      });
    });

    describe('!adam save that', () => {
      describe(`when Adam hasn't said anything yet`, () => {
        it('sends a friendly error message', () => {
          sendMessage('WHAT THE FUCK IS A BEE?', 'mercy');
          sendMessage('!adam save that');

          expect(sendMessageSpy).toHaveBeenCalledWith(`I AIN'T GOT SHIT TO SAVE DUMMY`);
        });
      });

      describe('when Adam has said something', () => {
        it('saves the quote to the database', () => {
          const createSpy = spyOn(mockAdamism, 'create').and.callFake((obj, cb) => cb());
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty');
          sendMessage('!adam save that');

          expect(createSpy).toHaveBeenCalledWith({message: 'WHAT THE FUCK IS A BEE?'}, jasmine.any(Function));
        });

        it('replies a friendly message if save succeeds', () => {
          spyOn(mockAdamism, 'create').and.callFake((obj, cb) => cb());
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty');
          sendMessage('!adam save that');

          expect(sendMessageSpy).toHaveBeenCalledWith('"WHAT THE FUCK IS A BEE?" saved to adam-bot!')
        });

        it('does not reply if save fails', () => {
          spyOn(mockAdamism, 'create').and.callFake(() => {});
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty');
          sendMessage('!adam save that');

          expect(sendMessageSpy).not.toHaveBeenCalled();
        });

        it('does not let you save the same thing twice', () => {
          const createSpy = spyOn(mockAdamism, 'create').and.callFake((obj, cb) => cb());
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty');
          sendMessage('!adam save that');
          sendMessage('!adam save that');

          expect(createSpy).toHaveBeenCalledTimes(1);
        });

        it('adds the saved quote to the in memory list as well', () => {
          spyOn(mockAdamism, 'create').and.callFake((obj, cb) => cb());
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty');
          sendMessage('!adam save that');

          const first = adam.getRandomMessage();
          const second = adam.getRandomMessage();
          expect([first, second].sort()).toEqual(['HAHAHA', 'WHAT THE FUCK IS A BEE?']);
        });
      });

      describe('Adam talking in multiple channels', () => {
        it(`doesn't count if Adam said something in another channel`, () => {
          sendMessage('WHAT THE FUCK IS A BEE?', 'TastyMeaty', 'WoW');

          sendMessage('!adam save that', 'Jagno', 'Overwatch');
          expect(sendMessageSpy).toHaveBeenCalledWith(`I AIN'T GOT SHIT TO SAVE DUMMY`);

          sendMessage('!adam save that', 'Jagno', 'WoW');
          expect(sendMessageSpy).toHaveBeenCalledWith(`"WHAT THE FUCK IS A BEE?" saved to adam-bot!`);
        });
      })
    });

    describe('!adam generate', () => {
      it('uses the MarkovChain to generate a quote and then sends it to the chat', () => {
        sendMessage('!adam generate');
        expect(sendMessageSpy).toHaveBeenCalledWith('A GENERATED MESSAGE BITCHES');
      });
    });
  });
});

function wakeUpNewAdam(token) {
  const adam = new Adam(token || 'token!', 'dbUri');
  adam.wakeUp();
  return adam;
}

function sendMessage(msg, username, channel) {
  message.content = msg;
  message.author.username = username || 'Jagno';
  message.channel.name = channel || 'General';
  messageHandler(message);
}

function makeFindAllSpy(quotes) {
  return spyOn(mockAdamism, 'findAll').and.callFake(cb => {
    cb(quotes);
  });
}
