#!/usr/bin/env node

const program = require("commander");
const glob = require("glob");

const pkg = require("../package.json");
const index = require("../src/index");
const logger = require("../src/logger");

program
  .description(pkg.description)
  .usage("[options] <files>")
  .option("-o, --output [file]", "output to a file (use stdout by default)")
  .version(pkg.version, "-v, --version")
  .parse(process.argv);

const args = program.args.length > 0 ? program.args : ["./*"]; // use the current directory as default

const files = []
  .concat(...args.map(file => glob.sync(file, { realpath: true })))
  .filter(file => file.endsWith(".yml"));

if (files.length === 0) {
  logger.error(`No *.yml files found. (Used glob pattern: ${args})`);
  process.exit(1);
}

const config = {
  output: program.output
};

index.build(files, config);
