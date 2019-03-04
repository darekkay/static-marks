# Static Marks

[![Travis](https://img.shields.io/travis/darekkay/static-marks.svg?style=flat-square)](https://travis-ci.org/darekkay/static-marks) [![npm](https://img.shields.io/npm/v/static-marks.svg?style=flat-square)](https://www.npmjs.com/package/static-marks) [![license](https://img.shields.io/github/license/darekkay/static-marks.svg?style=flat-square)](https://github.com/darekkay/static-marks/blob/master/LICENSE)

Convert your **plain bookmark** files into a **static web app**.

![Screenshot](docs/screenshot.png)

## Installation

As a globally available CLI tool:

```bash
npm install -g static-marks
```

As a local dependency in your project:

```bash
npm install --save static-marks
```

### Usage

```bash
static-marks -o bookmarks.html [glob]
```

or

```bash
static-marks [glob] >> bookmarks.html
```

`glob` can be any [node-glob](https://github.com/isaacs/node-glob) expression, e.g.:

```bash
static-marks demo.yml   # Use a single file
static-marks files/*    # Use all *.yml files in folder
static-marks            # Use all *.yml files in the current folder
```

### File format

Bookmark files are written in [YAML](http://yaml.org/). They use multiple levels of hierarchy:

```yaml
Collection:
  - Bucket:
    - Link 1: https://example.com
    - Link 2:
      - https://example.com
    - Link with notes:
      - https://example.com
      - This is a text note
      - Link note: https://example.com
```

If multiple files are provided to `static-marks`, they will become selectable via a menu.

### Examples

- [Simple example](https://darekkay.com/static-marks/demo/demo-example.html)
- [Curated list of awesome lists](https://darekkay.com/static-marks/demo/demo-awesome.html) (based on the [awesome](https://github.com/sindresorhus/awesome) project)
- [All examples](https://darekkay.com/static-marks/demo/demo-all.html) (combined)

See [examples](docs/examples) for source files.

## License

Copyright 2018 Darek Kay <hello@darekkay.com>  

This project and its contents are open source under the [MIT license](LICENSE).
