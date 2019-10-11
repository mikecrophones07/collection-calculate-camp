'use strict';

function find_first_even(collection) {
  let isFirst = true;
  return collection.reduce((prev, curr, index, arr) =>{
    if(curr%2 === 0 && isFirst){
      isFirst = false;
      return curr;
    }

    return prev;
  })
}

module.exports = find_first_even;

