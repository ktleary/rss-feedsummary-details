const R = require("ramda");
const { keywords } = require("../config/keywords");
const { selectedKeywordGroups } = require("../config/options");

const getKeywords = ({ words = keywords, keywordGroups = selectedKeywordGroups }) => {
  if (!R.length(R.values(words)) || !R.length(R.values(keywordGroups))) return [];
  return keywordGroups.reduce((all, wordGroup) => [...all, ...words[wordGroup]], []);
};

module.exports = { getKeywords };
