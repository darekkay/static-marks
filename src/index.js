const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const yaml = require("js-yaml");

const logger = require("./logger");
const transform = require("./transform-json");
const render = require("./render");

const templatePath = path.join(__dirname, "_template.html");

const save = (output, contents) => {
  mkdirp(path.dirname(output), err => {
    if (err) return logger.error(err);

    return fs.writeFile(
      output,
      contents,
      error =>
        error
          ? logger.error(error)
          : logger.info(`Created bookmarks file: ${path.resolve(output)}`)
    );
  });
};

const build = (files, config) => {
  const template = fs.readFileSync(templatePath, "utf-8");

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

  const result = render(bookmarks, template);

  if (config.output) {
    save(config.output, result);
  } else {
    logger.log(result); // Use stdout by default
  }
};

exports.build = build;
