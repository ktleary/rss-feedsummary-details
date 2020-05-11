'use strict';
const feedscanner = require('feedscanner');
const { getRandomFromArray } = require('./utils/helpers');
let { activeFeeds } = require('./config/feeds');
const { keywords } = require('./config/keywords');

async function main() {
  const devmode = true;
  if (devmode) activeFeeds = [getRandomFromArray(activeFeeds)];
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ activeFeeds }));
  const topicKeywords = keywords.automation;
  const feedSummary = await feedscanner(activeFeeds[0], topicKeywords, []);
  // eslint-disable-next-line no-console
  console.log(feedSummary);
}

main();
