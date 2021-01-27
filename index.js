const feedscanner = require("feedscanner");
const { getRandomFromArray } = require("./utils/helpers");
let { activeFeeds } = require("./config/feeds");
const { keywords } = require("./config/keywords");

const getRandomItem = items => items[Math.floor(Math.random() * arr.length)];

module.exports = { getRandomFromArray };

async function main() {
  const devmode = true;
  if (devmode) activeFeeds = [getRandomFromArray(activeFeeds)];

  console.log(JSON.stringify({ activeFeeds }));
  const topicKeywords = keywords.automation;
  const feedSummary = await feedscanner(activeFeeds[0], topicKeywords, []);

  console.log(feedSummary);
}

main();
