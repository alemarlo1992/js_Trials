"use strict";


/** 1. printIndices */
const printIndices = (items) => {
	   for (let i = 0; i < items.length; i += 1) {
    console.log(items[i], i);
  }
}


/** 2. everyOtherItem */
const everyOtherItem = (items) => {
let array = [];
  for (let i = 0; i < items.length; i += 2) {
    let item = items[i];
    array.push(item);
  }
  console.log(array)
}


/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code
};


printIndices(['a', 'b', 'c']);
everyOtherItem([2, 6, 7, 8, 7]);