/* eslint-disable no-console */

const log = (...values) => console.log(...values);
const info = (...values) => console.info(...values);
const warn = (...values) => console.warn(...values);
const error = (...values) => console.error(...values);
const exception = (message, ex) => error(message, ex.message ? ex.message : ex);

module.exports = {
  log,
  info,
  warn,
  error,
  exception,
};
