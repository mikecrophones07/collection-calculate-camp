'use strict';
var number_map_to_word = function(collection){
  return collection.map(value => String.fromCharCode(96 + value));
};

module.exports = number_map_to_word;
