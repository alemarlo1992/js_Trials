"use strict";


/** 1. countWords */
function countWords(phrase) {
  let wordCounts = {};
  for (let word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordCounts[word] += 1 
    }else{
      wordCounts[word] = 1
    }

  }
  return wordCounts
}


function getMelonsAtPrice(price) {
  let melonPrices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
  }
  if (price === undefined) {
    return NONE;
  }else {
    let sortPrice = melonPrices[price].sort();
    return sortPrice
  }

}

countWords('Wet foot, dry foot. Low foot, high foot.')
getMelonsAtPrice(3.25)
