const commander = require("commander");
const glob = require("glob");
const logger = require("@darekkay/logger");

const { expect } = require("chai");
const sinon = require("sinon");

const build = require("../bin/build");
const importBookmarks = require("../bin/import");
const report = require("../bin/report");
const cli = require("../bin/cli");

describe("CLI", () => {
  afterEach(function () {
    sinon.restore();
  });

  it("runs build command", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const buildSpy = sinon.fake();
    sinon.replace(build, "run", buildSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "build", "demo.yml"]);

    expect(buildSpy.callCount).to.equal(1);
  });

  it("runs build command with optional parameters", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const buildSpy = sinon.fake();
    sinon.replace(build, "run", buildSpy);

    const program = new commander.Command();
    cli(program, [
      "node",
      "static-marks",
      "build",
      "-o",
      "output.html",
      "demo.yml",
    ]);

    expect(buildSpy.callCount).to.equal(1);
  });

  it("runs import command", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const importBookmarksSpy = sinon.fake();
    sinon.replace(importBookmarks, "run", importBookmarksSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "import", "demo.yml"]);

    expect(importBookmarksSpy.callCount).to.equal(1);
  });

  it("runs import command with optional parameters", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const importBookmarksSpy = sinon.fake();
    sinon.replace(importBookmarks, "run", importBookmarksSpy);

    const program = new commander.Command();
    cli(program, [
      "node",
      "static-marks",
      "import",
      "demo.yml",
      "-o",
      "output.yml",
    ]);

    expect(importBookmarksSpy.callCount).to.equal(1);
  });

  it("runs report command", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const reportSpy = sinon.fake();
    sinon.replace(report, "run", reportSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "report", "demo.yml"]);

    expect(reportSpy.callCount).to.equal(1);
  });

  it("runs report command with optional parameters", () => {
    sinon.replace(glob, "sync", () => ["test.yml"]);

    const reportSpy = sinon.fake();
    sinon.replace(report, "run", reportSpy);

    const program = new commander.Command();
    cli(program, ["node", "static-marks", "report", "demo.yml", "-d"]);

    expect(reportSpy.callCount).to.equal(1);
  });

  it("display help page if no command is provided", () => {
    const consoleErrorSpy = sinon.fake();
    sinon.replace(logger, "error", consoleErrorSpy);

    const program = new commander.Command();
    const programHelpSpy = sinon.fake();
    sinon.replace(program, "help", programHelpSpy);

    cli(program, ["node", "static-marks"]);

    expect(
      consoleErrorSpy.calledWithMatch(sinon.match("Missing or unknown command"))
    ).to.equal(true);
    expect(programHelpSpy.callCount).to.equal(1);
  });

  it("display help page if an unknown command is provided", () => {
    const consoleErrorSpy = sinon.fake();
    sinon.replace(logger, "error", consoleErrorSpy);

    const program = new commander.Command();
    const programHelpSpy = sinon.fake();
    sinon.replace(program, "help", programHelpSpy);

    cli(program, ["node", "static-marks", "unknown"]);

    expect(
      consoleErrorSpy.calledWithMatch(sinon.match("Missing or unknown command"))
    ).to.equal(true);
    expect(programHelpSpy.callCount).to.equal(1);
  });
});
