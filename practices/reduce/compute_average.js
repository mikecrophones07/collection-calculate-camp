'use strict';

function compute_average(collection) {
  return collection.reduce((total, currentValue) => total + currentValue) / collection.length;
}

module.exports = compute_average;

