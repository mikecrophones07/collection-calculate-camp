'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((prev, curr) => prev + curr);
}

module.exports = calculate_elements_sum;

