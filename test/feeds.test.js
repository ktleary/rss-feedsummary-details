/* eslint-disable */
const test = require("ava");
const R = require("ramda");
const { getFeeds } = require("../util/feed");

test("it should return the default list of active feeds", t => {
  const feeds = getFeeds({});
  t.true(Array.isArray(feeds));
});

test("it should return the supplied list of active feeds", t => {
  const activeFeeds = ["https://go.com/rss", "https://yt.com/feed"];
  const feeds = getFeeds({ feeds: activeFeeds });
  t.true(R.includes(feeds[0], activeFeeds));
});
