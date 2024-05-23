const fs = require("fs");
const path = require("path");

const yaml = require("js-yaml");
const logger = require("@darekkay/logger");

const transform = require("./transform-json");
const render = require("./render");
const { writeFile } = require("./utils");

/** Validate each level of a bookmarks YAML file. */
const validateBookmarkStructure = (bookmarks) => {
  if (bookmarks === undefined) throw new Error(" - YAML file is empty.");
  if (Array.isArray(bookmarks))
    throw new Error(" - First level must be an object, not a list.");

  Object.entries(bookmarks).forEach(([key, values]) => {
    if (!Array.isArray(values))
      throw new Error(` - Collection '${key}' must be a list of buckets.`);

    values.forEach((bucket) => {
      Object.entries(bucket).forEach(([bucketKey, bucketValues]) => {
        if (!Array.isArray(bucketValues))
          throw new Error(
            ` - Bucket '${bucketKey}' must be a list of bookmarks.`
          );
      });
    });
  });
};

const build = (files, config) => {
  const template = fs.readFileSync(config.templateFilePath, "utf8");

  let loadFailed = false;
  const bookmarks = files
    .map((file) => {
      try {
        const json = yaml.load(fs.readFileSync(file, "utf8"));
        validateBookmarkStructure(json);
        return {
          key: path.basename(file, ".yml"),
          collections: transform(json),
        };
      } catch (error) {
        loadFailed = true;
        return logger.error(
          `Could not convert YAML file: ${file}\n `,
          error.message || error
        );
      }
    })
    .filter((bookmark) => bookmark !== undefined);

  if (loadFailed) {
    logger.error(
      "Process aborted: at least one YAML file is malformed. Read the project documentation for the correct file format."
    );
    process.exit(1);
  }

  const result = render({ template, bookmarks, config });

  if (config.output) {
    writeFile(config.output, result);
  } else {
    logger.log(result); // Use stdout by default
  }
};

module.exports.build = build;
