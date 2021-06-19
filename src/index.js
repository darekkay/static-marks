const fs = require("fs");
const path = require("path");

const yaml = require("js-yaml");
const logger = require("@darekkay/logger");

const transform = require("./transform-json");
const render = require("./render");
const { writeFile } = require("./utils");

const build = (files, config) => {
  const template = fs.readFileSync(config.templateFilePath, "utf-8");

  let loadFailed = false;
  const bookmarks = files
    .map((file) => {
      try {
        const json = yaml.load(fs.readFileSync(file, "utf8"));
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
    logger.error("Process aborted: at least one YAML file is malformed.");
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
