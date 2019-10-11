'use strict';

function choose_no_repeat_number(collection) {
  const unique = (x, i, a) => a.indexOf(x) == i;
  return collection.filter(unique);
}

module.exports = choose_no_repeat_number;
