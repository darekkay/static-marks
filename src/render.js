/** Render bookmarks into a template */

const logger = require("../src/logger.js");

const placeholder = '"%BOOKMARKS%"';

module.exports = (bookmarks, template) => {
  if (template.indexOf(placeholder) < 0) {
    logger.warn(`Template does not contain placeholder: ${placeholder}`);
    return "";
  }

  return template.replace(
    placeholder,
    `window.bookmarks=${JSON.stringify(bookmarks)};`
  );
};
