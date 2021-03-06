const logger = require("@darekkay/logger");

const pkg = require("../package.json");
const build = require("./build/index");
const importBookmarks = require("./import");
const report = require("./report");

// eslint-disable-next-line consistent-return
const cli = (program, argv) => {
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
    .action((args, options) => build.run({ args, options }))
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
    .action((file, options) => importBookmarks.run({ file, options }))
    .on("--help", () => {
      logger.log("");
      logger.log("Examples:");
      logger.log("");
      logger.log("  $ static-marks import exported.html > imported.yml");
    });

  // report
  program
    .command("report <files...>")
    .description("display bookmarks report")
    .option("-d, --no-duplicates", "do not check for duplicate bookmark URLs")
    .action((args, options) => report.run({ args, options }))
    .on("--help", () => {
      logger.log("");
      logger.log("Examples:");
      logger.log("");
      logger.log("  $ static-marks report bookmarks.yml");
      logger.log("  $ static-marks report files/*");
    });

  program.parse(argv);

  // const commands = program.args.filter((argument) => argument._name);

  const availableCommands = program.commands.map((command) => command.name());

  // missing/unknown subcommand
  if (program.rawArgs.length < 3) {
    logger.error(`Error: Missing command.\n`);
    program.help();
    return process.exit(1);
  }

  const command = program.rawArgs[2];
  if (!availableCommands.includes(command)) {
    logger.error(`Error: Unknown command '${command}'.\n`);
    program.help();
    return process.exit(1);
  }
};

module.exports = cli;
