/* eslint-disable */
const test = require("ava");
const R = require("ramda");
const { getKeywords } = require("../util/keyword");

test("it should return keywords for the selected group", t => {
  const words = {
    science: ["particle", "thermodynamic", "pollution", "factory"],
    music: ["guitar", "lyrics", "concert"],
    cooking: ["recipe", "shrimp", "new"],
  };
  const groups = ["science", "cooking"];
  const keywords = getKeywords({ words, keywordGroups: groups });
  t.true(R.includes(words["science"][1], keywords));
});
