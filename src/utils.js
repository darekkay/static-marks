const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const logger = require("@darekkay/logger");

const writeFile = (output, contents) => {
  try {
    mkdirp(path.dirname(output)).then(() => {
      return fs.writeFile(output, contents, (writeError) =>
        writeError
          ? logger.error(writeError)
          : logger.info(`Saved file: ${path.resolve(output)}`)
      );
    });
  } catch (error) {
    logger.error(error);
  }
};

module.exports.writeFile = writeFile;
