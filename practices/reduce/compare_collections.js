'use strict';

function compare_collections(collection_a, collection_b) {
  let isInCollection = true;

  collection_a.reduce((total, currentValue) => {
    if(!collection_b.includes(currentValue)){
      isInCollection = false;
    }
  })

  return isInCollection;
}

module.exports = compare_collections;


