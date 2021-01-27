const R = require("ramda");
const { Random } = require("random-js");
const random = new Random();

// pickRandomIndex :: [Any] -> Number
const randomInt = n => random.integer(0, n);

// randomListIndex :: [Any] -> Number -> Number
const randomListIndex = R.compose(randomInt, R.length);

// listOfOne :: Any -> [Any]
const listOfOne = item => R.insert(0, item, []);

// getRandomItem :: [String] -> String
const getRandomItem = list => R.nth(randomListIndex(list), list);

// oneRandomItemArray :: [Any] -> [Any]
const randomItemList = R.compose(listOfOne, getRandomItem);

module.exports = { listOfOne, randomInt, getRandomItem, randomItemList };
