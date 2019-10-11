'use strict';

function collect_min_number(collection) {
  return collection.reduce((prev, curr) => Math.min(prev, curr));
}

module.exports = collect_min_number;

