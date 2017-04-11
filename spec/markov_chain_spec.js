const MarkovChain = require('../app/markov_chain.js');
const preparedData = require('./fixtures/chain.json');

describe('MarkovChain', () => {
  describe('init', () => {
    it('makes a Markov chain from a sentence', () => {
      const sentence = 'it is nice that it is warm';
      const chain = new MarkovChain(sentence);
      expect(chain.data).toEqual({
        __start: ['it'],
        it: ['is', 'is'],
        is: ['nice', 'warm'],
        nice: ['that'],
        that: ['it'],
        warm: ['']
      });
    });

    it('marks the end with an empty string', () => {
      const sentence = 'it is what it is';
      const chain = new MarkovChain(sentence);
      expect(chain.data).toEqual({
        __start: ['it'],
        it: ['is', 'is'],
        is: ['what', ''],
        what: ['it']
      })
    });

    it('weights duplicated words properly', () => {
      const sentence = 'it is and it is and it will always be';
      const chain = new MarkovChain(sentence);
      expect(chain.data).toEqual({
        __start: ['it'],
        it: ['is', 'is', 'will'],
        is: ['and', 'and'],
        and: ['it', 'it'],
        will: ['always'],
        always: ['be'],
        be: ['']
      });
    });

    it('handles casing issues', () => {
      const sentence = 'this case and THIS CASE are the same';
      const chain = new MarkovChain(sentence);
      expect(chain.data).toEqual({
        __start: ['this'],
        this: ['case', 'CASE'],
        case: ['and', 'are'],
        and: ['THIS'],
        are: ['the'],
        the: ['same'],
        same: ['']
      });
    });

    it('treats commas as words', () => {
      const sentence = 'it is, as always, what it is';
      const chain = new MarkovChain(sentence);
      expect(chain.data).toEqual({
        __start: ['it'],
        it: ['is', 'is'],
        is: [',', ''],
        ',': ['as', 'what'],
        as: ['always'],
        always: [','],
        what: ['it']
      });
    });

    it('can accept an array of sentences', () => {
      const chain = new MarkovChain('this will always work', 'will this work today');
      expect(chain.data).toEqual({
        __start: ['this', 'will'],
        this: ['will', 'work'],
        will: ['always', 'this'],
        always: ['work'],
        work: ['', 'today'],
        today: ['']
      });
    });

    it('can handle a big example!', () => {
      const chain = new MarkovChain(
        `It is a period of civil war`,
        `Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire`,
        `During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet`,
        `Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy`
      );

      expect(chain.data).toEqual(preparedData[4]);
    });

    it('can handle another big example', () => {
      const chain = new MarkovChain(
        `It is a dark time for the Rebellion`,
        `Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy`,
        `Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth`,
        `The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space`
      );

      expect(chain.data).toEqual(preparedData[5]);
    });
  });

  describe('speak', () => {
    it('makes a sentence by following the chain', () => {
      const chain = new MarkovChain('a b c', 'a b d c', 'a d e c');
      const possibilities = ['a b c', 'a b d c', 'a d e c', 'a b d e c', 'a d c'];
      for (let i = 0; i < 100; i++) {
        expect(possibilities).toContain(chain.speak());
      }
    });

    it('handles differing capitalizations', () => {
      const chain = new MarkovChain('a B c', 'a b D', 'a B D e');
      const possibilities = ['a B c', 'a b c', 'a B D', 'a b D', 'a b D e', 'a B D e'];
      for (let i = 0; i < 100; i++) {
        expect(possibilities).toContain(chain.speak());
      }
    })
  });
});
