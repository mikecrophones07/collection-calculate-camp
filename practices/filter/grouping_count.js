'use strict';

function grouping_count(collection) {
  let object = [];
  [...new Set(collection)].forEach(i => {
    object[i] = collection.filter(x => x==i).length;
  });
  return object;
}

module.exports = grouping_count;
