const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const logger = require("./logger");

const writeFile = (output, contents) => {
  mkdirp(path.dirname(output), err => {
    if (err) return logger.error(err);

    return fs.writeFile(output, contents, error =>
      error
        ? logger.error(error)
        : logger.info(`Saved file: ${path.resolve(output)}`)
    );
  });
};

exports.writeFile = writeFile;
