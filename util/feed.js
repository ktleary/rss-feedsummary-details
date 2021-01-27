const length = require("ramda/src/length");
const activeFeeds = require("../config/feeds");

// getActiveFeeds :: [string] -> [string]
function getActiveFeeds(feeds = activeFeeds) {
  return length(feeds) ? feeds : [];
}

module.exports = { getActiveFeeds };
