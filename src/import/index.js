const fs = require("fs");
const parse = require("bookmarks-parser");
const { safeDump } = require("js-yaml");

const logger = require("../logger");
const { writeFile } = require("../utils");

const flatten = (bookmarks, folder, result) => {
  const category = { [folder]: [] };
  bookmarks.forEach((bookmark) => {
    if (bookmark.type === "bookmark") {
      category[folder].push({
        [bookmark.title]: bookmark.url,
      });
    } else if (bookmark.type === "folder") {
      flatten(bookmark.children, bookmark.title, result);
    }
  });
  result.push(category);
};

const importBookmarks = (file, config) => {
  const content = fs.readFileSync(file, "utf-8");
  parse(content, (err, res) => {
    if (err) {
      logger.error(err);
      return;
    }

    const flattened = [];
    flatten(res.bookmarks, "root", flattened);

    const yaml = safeDump({ Imported: flattened });

    if (config.output) {
      writeFile(config.output, yaml);
    } else {
      logger.log(yaml); // Use stdout by default
    }
  });
};

exports.importBookmarks = importBookmarks;
