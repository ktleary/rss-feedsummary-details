const feedscanner = require("feedscanner");
const { getFeeds } = require("./util/feed");
const { getKeywords } = require("./util/keyword");

async function getFeedSummary(feed, keywords) {
  const summary = await feedscanner(feed, keywords, []);
  return summary;
}

function main() {
  const feeds = getFeeds({ isDev: false });
  const keywords = getKeywords({});
  const feedSummaries = feeds.reduce(async (all, feed) => {
    const summary = await getFeedSummary(feed, keywords, []);
    return { ...all, [feed]: summary };
  }, {});

  return feedSummaries;
}

main(); // eslint-disable-line
