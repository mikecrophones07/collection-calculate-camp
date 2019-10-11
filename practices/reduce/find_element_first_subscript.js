'use strict';

function calculate_elements_sum(collection, element) {
  let isFirst = true
  return collection.reduce((prev, curr, index, arr) => {
    if(curr === element && isFirst === true){
      isFirst = false;
      return index;
    }
    return prev;
  })
}

module.exports = calculate_elements_sum;

