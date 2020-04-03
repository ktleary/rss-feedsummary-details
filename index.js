'use strict';
const feedScanner = require('content-scanning');

async function main() {
  const { getRandomFromArray } = require('./utils/helpers');
  let { activeFeeds } = require('./config/feeds');
  const { keywords } = require('./config/keywords');
  const devmode = true;
  if (devmode) activeFeeds = [getRandomFromArray(activeFeeds)];
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ activeFeeds }));
  const topicKeywords = keywords.automation;
  const feedSummary = await feedScanner(activeFeeds[0], topicKeywords, []);
  // eslint-disable-next-line no-console
  console.log(feedSummary);
}

main();
