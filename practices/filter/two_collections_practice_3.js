'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  collection_a.forEach(element => {
    if(collection_b.filter(compareElement => element % compareElement == 0).length > 0){
      result.push(element);
    }
  });
  return result;
}

module.exports = choose_divisible_integer;
