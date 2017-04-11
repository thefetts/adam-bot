module.exports = class MarkovChain {
  constructor(...sentences) {
    this.data = this.makeChain(sentences);
  }

  makeChain(sentences) {
    const chain = {__start: []};
    sentences.forEach(sentence => {
      sentence.split(' ').forEach((word, index, list) => {
        const cleanWord = sanitize(word);
        if (index === 0)
          chain.__start.push(cleanWord);

        if (word.indexOf(',') === word.length - 1) {
          initLists(chain, cleanWord, ',');
          chain[cleanWord].push(',');
          chain[','].push(nextWord(list, index));
        } else {
          initLists(chain, cleanWord);
          chain[cleanWord].push(nextWord(list, index));
        }

      });
    });
    return chain;
  }

  speak() {
    let quote = '';
    let words = 0;
    let nextWord = this.data.__start;
    while (words < 50) {
      if (!nextWord.filter(Boolean).length) break;

      const word = getRandom(nextWord);
      quote += `${word === ',' ? '' : ' '}${word}`;
      nextWord = this.data[word];
    }
    return quote.trim();
  }
};

function initLists(obj, ...keys) {
  keys.forEach(key => { if (!obj[key]) obj[key] = [] });
}

function nextWord(list, index) {
  return list.length > index + 1 ? sanitize(list[index + 1]) : '';
}

function sanitize(word) {
  return word.toLowerCase().replace(/,$/, '');
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
