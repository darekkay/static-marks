const glob = require("glob");
const logger = require("@darekkay/logger");

const index = require("../../src/import/index");

const importBookmarks = ({ file, options }) => {
  const files = glob.sync(file, { realpath: true });

  if (files.length === 0) {
    logger.error(`File not found: ${file}`);
    process.exit(1);
  }

  const config = {
    output: options.output,
  };

  index.importBookmarks(files[0], config);
};

module.exports = importBookmarks;
