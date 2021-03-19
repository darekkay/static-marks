#!/usr/bin/env node
const { Command } = require("commander");

const cli = require("./cli");

cli(new Command(), process.argv);
