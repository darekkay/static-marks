#!/usr/bin/env bash

rm -rf build
mkdir -p build/assets

# Markdown to HTML
pandoc \
  "../README.md" \
  --metadata title="Static Marks" \
  --metadata author="Darek Kay" \
  --metadata description="Convert your plain bookmark files into a shareable static web app." \
  --metadata authorUrl="https://darekkay.com" \
  --metadata githubUrl="https://github.com/darekkay/static-marks" \
  --to html \
  --standalone \
  --highlight-style="$HOME/.pandoc/themes/tomorrow-night.theme" \
  --template="$HOME/.pandoc/templates/darekkay.html" \
  --filter="$HOME/.pandoc/filters/strip-h1.js" \
  --filter="$HOME/.pandoc/filters/add-headline-anchors.js" \
  --filter="$HOME/.pandoc/filters/external-links.js" \
  --output "./build/index.html"

# Build examples
../bin/static-marks.js --version
../bin/static-marks.js -o ./build/demo/default.html -t "Demo | Static Marks" build ./examples/bookmarks/*
../bin/static-marks.js -o ./build/demo/custom.html --template-file ./examples/templates/custom.html build ./examples/bookmarks/*


# Copy assets
cp -r ../assets build/
cp favicon.ico build/favicon.ico

echo "Generated docs in ./build"
