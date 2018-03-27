# Static Marks

![Screenshot](docs/screenshot.png)

## Installation

Install either globally or locally.

```bash
npm install [-g] static-marks
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

A bookmark file is written in [YAML](http://yaml.org/). It uses multiple levels of hierarchy:

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

- [Simple example](https://staticmarks.com/demo/demo-example.html)
- [Curated list of awesome lists](https://staticmarks.com/demo/demo-awesome.html) (based on the [awesome](https://github.com/sindresorhus/awesome) project)
- [All examples](https://staticmarks.com/demo/demo-all.html) (combined)

See [examples](docs/examples) for source files.

## License

Copyright 2018 Darek Kay <hello@darekkay.com>  

This project and its contents are open source under the [MIT license](LICENSE).
