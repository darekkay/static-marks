const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const logger = require("./logger");
const transform = require("./transform-json");
const render = require("./render");
const { writeFile } = require("./utils");

const build = (files, config) => {
  const template = fs.readFileSync(config.templateFilePath, "utf-8");

  const bookmarks = files
    .map(file => {
      try {
        const json = yaml.safeLoad(fs.readFileSync(file, "utf8"));
        return {
          key: path.basename(file, ".yml"),
          collections: transform(json)
        };
      } catch (e) {
        return logger.exception(`Could not convert YAML file: ${file}\n `, e);
      }
    })
    .filter(bookmark => bookmark !== undefined);

  const result = render({ template, bookmarks, config });

  if (config.output) {
    writeFile(config.output, result);
  } else {
    logger.log(result); // Use stdout by default
  }
};

exports.build = build;
