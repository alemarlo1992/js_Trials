"use strict";

const wordsInCommon = (words1, words2) => {
  let words1Set = new Set(words1);
  let words2Set = new Set(words2);

  let result = new Set();

  for (let word1 of words1Set) {
    for (let word2 of words2Set) {
      if (word1 === word2) {
        result.add(word1);
      }
    }
  } 
  return result
}

wordsInCommon(['wet', 'foot', 'dry', 'foot'], ['low', 'foot', 'dry', 'foot'])