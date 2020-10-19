const fs = require("fs");
const parse = require("bookmarks-parser");
const { safeDump } = require("js-yaml");
const logger = require("@darekkay/logger");

const { writeFile } = require("../utils");

const flatten = (bookmarks, folder, result) => {
  const category = { [folder]: [] };
  bookmarks.forEach((bookmark) => {
    if (bookmark.type === "bookmark") {
      category[folder].push({
        [bookmark.title]: bookmark.url,
      });
    }
    if (Array.isArray(bookmark.children) && bookmark.children.length > 0) {
      flatten(bookmark.children, bookmark.title, result);
    }
  });
  result.push(category);
};

const importBookmarks = (file, config) => {
  const content = fs.readFileSync(file, "utf-8");
  parse(content, (error, result) => {
    if (error) {
      logger.error(error);
      return;
    }

    const flattened = [];
    flatten(result.bookmarks, "root", flattened);

    const nonEmpty = flattened.filter(
      (category) => Object.values(category)[0].length > 0
    );

    // set implicit labels in empty link labels
    nonEmpty.forEach((bookmarkFolder) => {
      Object.values(bookmarkFolder)[0].forEach((bookmark) => {
        if (!Object.keys(bookmark)[0]) {
          bookmark[bookmark[""]] = bookmark[""];
          delete bookmark[""];
        }
      });
    });

    const yaml = safeDump({ Imported: nonEmpty });

    if (config.output) {
      writeFile(config.output, yaml);
    } else {
      logger.log(yaml); // Use stdout by default
    }
  });
};

module.exports.importBookmarks = importBookmarks;
