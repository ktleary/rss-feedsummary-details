const insert = require("ramda/src/insert");

// oneItemArray :: Any -> [Any]
const oneItemArray = item => insert(item, []);

module.exports = { oneItemArray };
