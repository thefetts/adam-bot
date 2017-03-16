const proxyquire = require('proxyquire');
let Adam;
let mockClient;

beforeEach(() => {
  mockClient = {
    on() { },
    login() { }
  };

  function Client() {
    return mockClient
  }

  Adam = proxyquire('../app/adam', {
    'discord.js': {Client}
  });
});

describe('Adam', () => {
  describe('wakeUp', () => {
    it('logs into the discord server', () => {
      let loginSpy = spyOn(mockClient, 'login');
      let token = Math.random();
      wakeUpNewAdam(undefined, token);

      expect(loginSpy).toHaveBeenCalledWith(token);
    });

    describe('messaging', () => {
      let message;
      let onSpy;
      let sendMessageSpy;

      beforeEach(() => {
        message = {
          content: '',
          channel: {
            sendMessage() {}
          }
        };

        onSpy = spyOn(mockClient, 'on').and.callFake((str, cb) => {
          if (str === 'message') cb(message);
        });

        sendMessageSpy = spyOn(message.channel, 'sendMessage');
      });

      it('ignores messages that do not start with !adam', () => {
        message.content = 'anything else';
        wakeUpNewAdam();

        expect(onSpy).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
        expect(sendMessageSpy).not.toHaveBeenCalled();
      });

      it('responds to messages that start with !adam', () => {
        message.content = '!adam';
        wakeUpNewAdam();

        expect(onSpy).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
        expect(sendMessageSpy).toHaveBeenCalled();
      });

      ['!ADAM', '!adAM', '!AdAm', '!ADAm', '!aDaM'].forEach(msg => {
        it(`is case insensitive and works with '${msg}'`, () => {
          message.content = msg;
          wakeUpNewAdam();

          expect(onSpy).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Function));
          expect(sendMessageSpy).toHaveBeenCalled();
        });
      });
    });
  });

  describe('getRandomMessage', () => {
    it('gets a random message from the list', () => {
      const adam = wakeUpNewAdam(['a']);
      expect(adam.getRandomMessage()).toEqual('a');
    });

    it('uses unique messages until all have been used', () => {
      let quotes = ['a', 'b', 'c', 'd', 'e'];

      // Run it 100 times since without proper logic it could
      // happen to pass once or twice by chance
      for (let i = 0; i < 100; i++) {
        const adam = wakeUpNewAdam(quotes);

        // Burn 4 of the 5 messages
        const first = adam.getRandomMessage();
        const second = adam.getRandomMessage();
        const third = adam.getRandomMessage();
        const fourth = adam.getRandomMessage();

        // Filter them out of the list so we know what message has
        // not yet come through
        const lastAvailableQuote = quotes
          .filter(quote =>
            quote != first &&
            quote != second &&
            quote != third &&
            quote != fourth
          )[0];

        expect(adam.getRandomMessage()).toEqual(lastAvailableQuote);
      }
    });
  });
});

function wakeUpNewAdam(quotes, token) {
  const adam = new Adam(quotes || []);
  adam.wakeUp(token || 'token!');
  return adam;
}
