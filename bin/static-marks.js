#!/usr/bin/env node
/* eslint-disable no-console */

const program = require("commander");

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
    console.log("");
    console.log("Examples:");
    console.log("");
    console.log("  $ static-marks build bookmarks.yml > bookmarks.html");
    console.log("  $ static-marks build files/* > bookmarks.html");
  });

// import
program
  .command("import <file>")
  .description("import bookmarks from chrome, firefox or pocket")
  .option("-o, --output [file]", "output to a file (use stdout by default)")
  .action((file, options) => importBookmarks({ file, options }))
  .on("--help", () => {
    console.log("");
    console.log("Examples:");
    console.log("");
    console.log("  $ static-marks import exported.html > imported.yml");
  });

// report
program
  .command("report <files...>")
  .description("report bookmarks")
  .action((args, options) => report({ args, options }))
  .on("--help", () => {
    console.log("");
    console.log("Examples:");
    console.log("");
    console.log("  $ static-marks report bookmarks.yml");
    console.log("  $ static-marks report files/*");
  });

program.parse(process.argv);

// eslint-disable-next-line no-underscore-dangle
const commands = program.args.filter((argument) => argument._name);

// missing/unknown subcommand
if (program.args.length === 0 || commands.length === 0) {
  console.error(`Error: Missing or unknown command.\n`);
  program.help();
}
