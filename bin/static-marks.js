#!/usr/bin/env node

const program = require("commander");
const logger = require("@darekkay/logger");

const pkg = require("../package.json");

const build = require("./build");
const importBookmarks = require("./import");
const report = require("./report");

program
  .description(pkg.description)
  .usage("<command> [options]")
  .version(pkg.version);

// build
program
  .command("build <files...>")
  .description("build bookmarks app")
  .option("-o, --output [file]", "output to a file (use stdout by default)")
  .option("-t, --title [title]", "set document title")
  .option("--template-file [file]", "use a custom web page template")
  .action((args, options) => build({ args, options }))
  .on("--help", () => {
    logger.log("");
    logger.log("Examples:");
    logger.log("");
    logger.log("  $ static-marks build bookmarks.yml > bookmarks.html");
    logger.log("  $ static-marks build files/* > bookmarks.html");
  });

// import
program
  .command("import <file>")
  .description("import bookmarks from chrome, firefox or pocket")
  .option("-o, --output [file]", "output to a file (use stdout by default)")
  .action((file, options) => importBookmarks({ file, options }))
  .on("--help", () => {
    logger.log("");
    logger.log("Examples:");
    logger.log("");
    logger.log("  $ static-marks import exported.html > imported.yml");
  });

// report
program
  .command("report <files...>")
  .description("report bookmarks")
  .option("-d, --no-duplicates", "do not check for duplicate bookmark URLs")
  .action((args, options) => report({ args, options }))
  .on("--help", () => {
    logger.log("");
    logger.log("Examples:");
    logger.log("");
    logger.log("  $ static-marks report bookmarks.yml");
    logger.log("  $ static-marks report files/*");
  });

program.parse(process.argv);

// eslint-disable-next-line no-underscore-dangle
const commands = program.args.filter((argument) => argument._name);

// missing/unknown subcommand
if (program.args.length === 0 || commands.length === 0) {
  logger.error(`Error: Missing or unknown command.\n`);
  program.help();
}
