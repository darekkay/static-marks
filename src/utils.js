const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const logger = require("./logger");

const writeFile = (output, contents) => {
  mkdirp(path.dirname(output), (error) => {
    if (error) return logger.error(error);

    return fs.writeFile(output, contents, (writeError) =>
      writeError
        ? logger.error(writeError)
        : logger.info(`Saved file: ${path.resolve(output)}`)
    );
  });
};

module.exports.writeFile = writeFile;
