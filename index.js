const feedscanner = require("feedscanner");
const { logstring } = require("./util/log");
const { activeFeeds } = require("./config/feeds");
const { keywords } = require("./config/keywords");
const { env } = require("./config/env");
const { oneRandomItemArray } = require("./util/random");



async function main() {
  const currentFeeds = env.dev ? oneRandomItemArray(activeFeeds) : getActiveFeeds(activeFeeds);
  const topicKeywords = keywords.automation;
  const feedSummary = await feedscanner(activeFeeds[0], topicKeywords, []);

  logstring({ currentFeeds }); // eslint-disable-line
  return logstring(feedSummary);
}

/* eslint-disable fp/no-unused-expression */
main();

module.exports = { getRandomFromArray };
