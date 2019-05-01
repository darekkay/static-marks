#!/usr/bin/env node
/* eslint-disable no-console */

const program = require("commander");

const pkg = require("../package.json");

const build = require("./build");
const importBookmarks = require("./import");

program
  .description(pkg.description)
  .usage("[options] <command>")
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

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
