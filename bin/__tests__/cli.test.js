const commander = require("commander");
const glob = require("glob");
const logger = require("@darekkay/logger");

const build = require("../build");
const importBookmarks = require("../import");
const report = require("../report");
const cli = require("../cli");

describe("CLI", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("runs build command", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const buildSpy = jest.fn();
    jest.spyOn(build, "run").mockImplementation(buildSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "build", "demo.yml"]);

    expect(buildSpy).toHaveBeenCalledTimes(1);
  });

  test("runs build command with optional parameters", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const buildSpy = jest.fn();
    jest.spyOn(build, "run").mockImplementation(buildSpy);

    const program = new commander.Command();
    cli(program, [
      "node",
      "static-marks",
      "build",
      "-o",
      "output.html",
      "demo.yml",
    ]);

    expect(buildSpy).toHaveBeenCalledTimes(1);
  });

  test("runs import command", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const importBookmarksSpy = jest.fn();
    jest.spyOn(importBookmarks, "run").mockImplementation(importBookmarksSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "import", "demo.yml"]);

    expect(importBookmarksSpy).toHaveBeenCalledTimes(1);
  });

  test("runs import command with optional parameters", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const importBookmarksSpy = jest.fn();
    jest.spyOn(importBookmarks, "run").mockImplementation(importBookmarksSpy);

    const program = new commander.Command();
    cli(program, [
      "node",
      "static-marks",
      "import",
      "demo.yml",
      "-o",
      "output.yml",
    ]);

    expect(importBookmarksSpy).toHaveBeenCalledTimes(1);
  });

  test("runs report command", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const reportSpy = jest.fn();
    jest.spyOn(report, "run").mockImplementation(reportSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "report", "demo.yml"]);

    expect(reportSpy).toHaveBeenCalledTimes(1);
  });

  test("runs report command with optional parameters", () => {
    jest.spyOn(glob, "sync").mockImplementation(() => ["test.yml"]);

    const reportSpy = jest.fn();
    jest.spyOn(report, "run").mockImplementation(reportSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "report", "demo.yml", "-d"]);

    expect(reportSpy).toHaveBeenCalledTimes(1);
  });

  test("display help page and exit if no command is provided", () => {
    const consoleErrorSpy = jest.fn();
    jest.spyOn(logger, "error").mockImplementation(consoleErrorSpy);

    const processExitSpy = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(processExitSpy);

    const program = new commander.Command();
    const programHelpSpy = jest.fn();
    jest.spyOn(program, "help").mockImplementation(programHelpSpy);

    cli(program, ["node", "static-marks"]);

    expect(consoleErrorSpy).toHaveBeenCalledWith("Error: Missing command.\n");
    expect(programHelpSpy).toHaveBeenCalledTimes(1);
    expect(processExitSpy).toHaveBeenCalledTimes(1);
  });

  test("display help page and exit if an unknown command is provided", () => {
    const consoleErrorSpy = jest.fn();
    jest.spyOn(logger, "error").mockImplementation(consoleErrorSpy);

    const processExitSpy = jest.fn();
    jest.spyOn(process, "exit").mockImplementation(processExitSpy);

    const program = new commander.Command();
    const programHelpSpy = jest.fn();
    jest.spyOn(program, "help").mockImplementation(programHelpSpy);

    cli(program, ["node", "static-marks", "unknown"]);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error: Unknown command 'unknown'.\n"
    );
    expect(programHelpSpy).toHaveBeenCalledTimes(1);
    expect(processExitSpy).toHaveBeenCalledTimes(1);
  });
});
