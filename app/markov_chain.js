module.exports = class MarkovChain {
  constructor(...sentences) {
    this.data = makeChain(sentences);
  }

  speak() {
    let quote = '',
      words = 0,
      nextWord = this.data.__start;

    while (words < 50) {
      const word = nextWord[Math.floor(Math.random() * nextWord.length)];
      if (!word) break;

      quote += (word === ',' ? '' : ' ') + word;
      nextWord = this.data[word.toLowerCase()];
      words++;
    }
    return quote.trim();
  }
};

const regexp = /,$/;

function makeChain(sentences) {
  const chain = {__start: []};
  sentences.forEach(sentence => {
    sentence.split(' ').forEach((word, index, list) => {
      const cleanWord = sanitize(word);
      if (index === 0) chain.__start.push(cleanWord);

      const lowerCleanWord = cleanWord.toLowerCase();
      const nextWord = list.length > index + 1 ? sanitize(list[index + 1]) : null;
      if (word.match(regexp)) {
        push(chain, lowerCleanWord, ',');
        push(chain, ',', nextWord);
      } else {
        push(chain, lowerCleanWord, nextWord);
      }
    });
  });
  return chain;
}

function push(obj, key, entry) {
  if(!obj[key]) obj[key] = [];
  obj[key].push(entry);
}

function sanitize(word) {
  return word.replace(regexp, '');
}
