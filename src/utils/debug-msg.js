const debug = require("debug")("dice-api");

let debugMsg;
if (process.env.DEBUG) {
  debugMsg = (type, ...args) => debug(...args);
} else {
  debugMsg = (type, ...args) => {
    switch (type) {
      case "warn":
        return console[type]("\x1b[33m%s\x1b[0m", ...args);
      case "error":
        return console[type]("\x1b[31m%s\x1b[0m", ...args);
      default:
        return console.log(...args);
    }
  };
}

module.exports = debugMsg;
