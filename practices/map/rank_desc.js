'use strict';
var rank_desc = function(collection){
  return collection.map(value => value).sort((a, b) => a - b);
};

module.exports = rank_desc;
