/* eslint-disable */
const test = require("ava");
const R = require("ramda");
const { listOfOne, randomIndex, getRandomItem, randomItemList } = require("../util/random-item");

test("it returns a list index between zero and list length -1 ", t => {
  const list = [1, 2, 3];
  const int = randomIndex(0, R.length(list));
  t.true(R.gte(int, 0) && R.lte(int, 2));
});

test("it returns one (random) item from the list ", t => {
  const list = [
    "https://www.scmp.com/rss/320663/feed",
    "https://webfeeds.brookings.edu/brookingsrss/topics/technology",
    "https://www.xinwengao.com/china-pr/business-finance/feed/",
    "http://www.xinhuanet.com/english/rss/scirss.xml",
  ];
  const picked = getRandomItem(list);
  t.true(R.includes(picked, list));
});

test("it wraps an item in a list", t => {
  const item = "https://www.xinwengao.com/china-pr/business-finance/feed/";
  const itemArray = listOfOne(item);
  t.true(R.includes(item, itemArray) && R.length(itemArray) === 1);
});

test("it returns an array of one Random Item", t => {
  const list = [
    "https://www.scmp.com/rss/320663/feed",
    "https://webfeeds.brookings.edu/brookingsrss/topics/technology",
    "https://www.xinwengao.com/china-pr/business-finance/feed/",
    "http://www.xinhuanet.com/english/rss/scirss.xml",
  ];
  const oneItemArray = randomItemList(list);
  t.true(Array.isArray(oneItemArray) && R.length(oneItemArray) === 1);
});
