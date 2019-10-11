'use strict';
var rank_asc = function(collection){
  return collection.map(value => value).sort((a, b) => b - a);
};

module.exports = rank_asc;
