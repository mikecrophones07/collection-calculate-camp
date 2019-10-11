'use strict';

var numberList = [];
var halfLength = 0;

function compute_median(collection) {
  numberList = collection.sort((a, b) => a - b);
  halfLength = parseInt(numberList.length / 2);
  return parseFloat(numberList.reduce(getMedian, 0));
}

function getMedian(previousValue, currentVal, currentIndex, arr){
  if(numberList.length%2==0){
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

module.exports = compute_median;


