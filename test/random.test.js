/* eslint-disable */
const test = require("ava");
const {
  getRandomItem,
  length,
  oneItemArray,
  oneRandomItemArray,
  pickRandomIndex,
} = require("../util/random");

test("it returns the length of the list", t => {
  const list = [1, 2, 3];
  t.is(length(list), 3);
});

test("it returns number between zero and list length minus 1 ", t => {
  const list = ["one", "two", "three"];
  const randomIndex = pickRandomIndex(list);
  t.true(randomIndex >= 0 && randomIndex <= length(list));
});

test("it returns one (random) item from the list ", t => {
  const list = [
    "https://www.scmp.com/rss/320663/feed",
    "https://webfeeds.brookings.edu/brookingsrss/topics/technology",
    "https://www.xinwengao.com/china-pr/business-finance/feed/",
    "http://www.xinhuanet.com/english/rss/scirss.xml",
  ];
  const picked = getRandomItem(list);
  console.log(picked);
  t.true(list.includes(picked));
});

test("it wraps an item in an array", t => {
  const item = "https://www.xinwengao.com/china-pr/business-finance/feed/";
  const itemArray = oneItemArray(item);
  t.true(itemArray.includes(item) && length(itemArray) === 1);
});

test("it returns an array of one Random Item", t => {
  const list = [
    "https://www.scmp.com/rss/320663/feed",
    "https://webfeeds.brookings.edu/brookingsrss/topics/technology",
    "https://www.xinwengao.com/china-pr/business-finance/feed/",
    "http://www.xinhuanet.com/english/rss/scirss.xml",
  ];
  const oneItemArray = oneRandomItemArray(list);
  t.true(Array.isArray(oneItemArray) && length(oneItemArray) === 1);
});
