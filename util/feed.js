const R = require("ramda");
const { randomItemList } = require("./random-item");
const { activeFeeds } = require("../config/feeds");
const { env } = require("../config/env");

// getActiveFeeds :: [string] -> [string]
function getFeeds({ feeds = activeFeeds, isDev = env.dev }) {
  if (!R.length(feeds)) return [];
  return isDev ? randomItemList(feeds) : feeds;
}

module.exports = { getFeeds };
