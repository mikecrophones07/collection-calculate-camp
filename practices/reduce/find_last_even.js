'use strict';

function find_last_even(collection) {
  return collection.reduce((prev, curr, index, arr) =>{
    if(curr%2 === 0){
      return curr;
    }

    return prev;
  })
}

module.exports = find_last_even;
