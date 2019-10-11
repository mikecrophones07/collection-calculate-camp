'use strict';

function calculate_elements_sum(collection, element) {
    return collection.reduce((prev, curr, index, arr) => {
      if(curr == element){
        return index;
      }
      return prev;
    })
}

module.exports = calculate_elements_sum;
