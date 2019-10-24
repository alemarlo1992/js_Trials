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
  let sortedItem = items.sort((a, b) => a - b);

  let array = [];
  for (let i = 0; i < n; i++) {

    array.push(sortedItem[i]);

  }
// let new_array= array.slice(0, n); 
// console.log(new_array)
console.log(array)

};


printIndices(['a', 'b', 'c']);
everyOtherItem([2, 6, 7, 8, 7]);
smallestNItems([2, 6, 7, 8, 7, 37, 85, 0], 5)
