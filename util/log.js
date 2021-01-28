const R = require("ramda");

// logger :: Object -> string
const logger = message => console.log(message);

// stringer :: Object -> string
const stringer = item => JSON.stringify(item);

// logstring :: Object -> string -> string
const logstring = R.compose(logger, stringer);

module.exports = { logger, logstring };
