const path = require("path");
const glob = require("glob");

const index = require("../../src/index");
const logger = require("../../src/logger");

const build = ({ args, options }) => {
  const files = []
    .concat(...args.map(file => glob.sync(file, { realpath: true })))
    .filter(file => file.endsWith(".yml"));

  if (files.length === 0) {
    logger.error(`No *.yml files found. (Used glob pattern: ${args})`);
    process.exit(1);
  }

  const config = {
    output: options.output,
    title: options.title || "Static Marks",
    templateFilePath:
      options.templateFile ||
      path.join(__dirname, "..", "..", "src", "_template.html")
  };

  index.build(files, config);
};

module.exports = build;
