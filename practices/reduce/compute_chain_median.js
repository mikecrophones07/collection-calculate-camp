'use strict';

var sortedList = [];
var halfLength = 0;

function compute_chain_median(collection) {
  sortedList = collection.split("->").sort((a, b) => a - b);
  halfLength = parseInt(sortedList.length / 2);
  return parseFloat(sortedList.reduce(getMedian, 0));
}

function getMedian(previousValue, currentVal, currentIndex, arr){
  if(sortedList.length%2==0){
    if(currentIndex === halfLength-1){
      let result = (((parseFloat(currentVal) + parseFloat(arr[++currentIndex])) / 2).toFixed(1));
      return parseFloat(result);
    }
  }
  else{
    if(currentIndex === halfLength-1){
      return parseFloat(currentVal).toFixed(1);
    }
  }

  return parseFloat(previousValue).toFixed(1);
}

module.exports = compute_chain_median;
