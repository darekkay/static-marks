#!/usr/bin/env bash

# This is a smoke test that executes different commands

# version
../bin/static-marks.js --version
echo "---"

# missing command
../bin/static-marks.js
echo "---"

# unknown command
../bin/static-marks.js unknown
echo "---"

# build: missing parameter
../bin/static-marks.js build
echo "---"

# build: -o parameter
../bin/static-marks.js build ../docs/examples/bookmarks/* -o temp/out.html
echo "---"

# build: redirect using '>'
../bin/static-marks.js build ../docs/examples/bookmarks/* > temp/redirect.html
echo "no output"
echo "---"

# report
../bin/static-marks.js report ../docs/examples/bookmarks/*
echo "---"

# report: with duplicates
../bin/static-marks.js report ./examples/maximal-example.yml
echo "---"

# report: ignore duplicates
../bin/static-marks.js report ./examples/maximal-example.yml -d
echo "---"
