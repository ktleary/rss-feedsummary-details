const compose = require("101/compose");

// length :: [Any] -> Number
const length = list => list.length;

// pickRandomIndex :: [Any] -> Number
const pickRandomIndex = list => Math.floor(Math.random() * length(list));

// getRandomItem :: [String] -> String
const getRandomItem = list => list[pickRandomIndex(list)];

// oneItemArray :: Any -> [Any]
const oneItemArray = item => [item];

// oneRandomItemArray :: Any -> [Any]
const oneRandomItemArray = compose(oneItemArray, getRandomItem);

module.exports = { getRandomItem, length, oneItemArray,  oneRandomItemArray, pickRandomIndex };
