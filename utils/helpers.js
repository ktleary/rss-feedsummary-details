'use strict';

function getRandomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = { getRandomFromArray };
