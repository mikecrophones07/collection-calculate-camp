'use strict';

function collect_max_number(collection) {
  return collection.reduce((prev, curr) => Math.max(prev, curr));
}

module.exports = collect_max_number;
