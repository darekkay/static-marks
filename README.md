# Static Marks

[![Travis](https://img.shields.io/travis/com/darekkay/static-marks.svg?style=flat-square)](https://travis-ci.com/darekkay/static-marks) [![npm](https://img.shields.io/npm/v/static-marks.svg?style=flat-square)](https://www.npmjs.com/package/static-marks) [![license](https://img.shields.io/github/license/darekkay/static-marks.svg?style=flat-square)](https://github.com/darekkay/static-marks/blob/master/LICENSE)

<div align="center" class="text-center">

Convert your **plain bookmark** files into a **static web app**.

![](assets/img/workflow.svg)

</div>

- **Share** your bookmarks app via a single HTML file.
- It's **free** and [open source](https://github.com/darekkay/static-marks).
- Browser-independent.
- **Import** bookmarks from Chrome, Firefox or Pocket.

🔖 [**View Live Demo**](https://darekkay.com/static-marks/demo/default.html)

## Demo

<div align="center" class="text-center">

![](assets/img/screencast.gif)

</div>

## Features

- Use custom browser search engines with a `?search=%s` URL param ([example](https://darekkay.com/static-marks/demo/default.html?search=fire)).
- Use custom web page templates. If you don't like the default UI, provide your own ([example](https://darekkay.com/static-marks/demo/custom.html) based on [this template](https://github.com/darekkay/static-marks/blob/master/docs/examples/templates/custom.html)).

## Quickstart

- Install Static Marks:

```bash
npm install -g static-marks
```

- Convert your (exported) browser bookmarks to YAML:

```bash
static-marks import browser-bookmarks.html > bookmarks.yml
```

- Generate your bookmarks app:

```bash
static-marks build bookmarks.yml > bookmarks.html
```

## Installation

- As a globally available CLI tool:

```bash
npm install -g static-marks
```

- As a local dependency in your project:

```bash
npm install --save static-marks
```

- As a [docker container](https://github.com/gaerfield/static-marks-docker) (unofficial).

## Usage

```
static-marks [options] <command>

Options:
  -V, --version               output the version number
  -h, --help                  output usage information

Commands:
  build [options] <files...>  build bookmarks app
  import [options] <file>     import bookmarks from chrome, firefox or pocket
  report <files...>           report bookmarks
```

Run `static-marks <command> --help` to view the usage of a specific command.

### Build bookmarks app

```
static-marks build [options] <files...>

Options:
  -o, --output [file]     output to a file (use stdout by default)
  -t, --title [title]     set document title
  --template-file [file]  use a custom web page template
```

Examples:

```bash
static-marks build bookmarks.yml > bookmarks.html  # Single file
static-marks build -o bookmarks.html bookmark.yml  # Alt. notation
static-marks build f1.yml f2.yml > bookmarks.html  # Multiple files
static-marks build files/* > bookmarks.html        # All files at path
```

### Import bookmarks

```
static-marks import [options] <file>

Options:
  -o, --output [file]  output to a file (use stdout by default)
```

Examples:

```bash
static-marks import exported.html > imported.yml
```

### View a report for your bookmarks

Currently, the report contains only the total bookmarks count. In the future, it might be used for detecting duplicate and dead links.

```
static-marks report [options] <files...>
```

Examples:

```bash
static-marks report bookmarks.yml
static-marks report files/*
```

## File format

Bookmark files are written in [YAML](http://yaml.org). There are multiple levels of hierarchy:

```yaml
Collection:
  - Bucket:
      - Link: https://example.com
```

A link URL can be expressed either as an item property or as a child item:

```yaml
- Link 1: https://example.com
- Link 2:
    - https://example.com
```

Notes and nested links are added as children of a link (the first element is the link URL):

```yaml
- Link with notes:
    - https://example.com
    - This is a text note
    - Link note: https://example.com</pre>
```

First-level notes can be used to describe or structure a bucket:

```yaml
- Bucket:
    - Link 1: https://example.com
    - Carpe diem!
```

Here's a complete example:

```yaml
Collection:
  - Bucket:
      - Link 1: https://example.com
      - Link 2:
          - https://example.com
      - Link with notes:
          - https://example.com
          - This is a text note
          - Link note: https://example.com</pre>
      - First-level note
```

If multiple files are provided to `static-marks`, they will become selectable via a menu.

## Development and Contribution

The frontend part of Static Mark is maintained in [another repository](https://github.com/darekkay/static-marks-app), where a template file (`_template.html`) is being generated. This approach makes it possible to include the whole application and user-defined bookmarks in a single HTML file.

If you want to provide any frontend-related changes, please create a PR in the other repository. Changes to the core CLI application are handled here instead.

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href='https://darekkay.com/' title='darekkay is awesome!'><img src='https://avatars0.githubusercontent.com/u/3101914?v=4' alt='darekkay' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/gaerfield' title='gaerfield is awesome!'><img src='https://avatars0.githubusercontent.com/u/13051868?v=4' alt='gaerfield' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/kaushalyap' title='kaushalyap is awesome!'><img src='https://avatars3.githubusercontent.com/u/24698778?v=4' alt='kaushalyap' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/k-kalinowski' title='k-kalinowski is awesome!'><img src='https://avatars2.githubusercontent.com/u/8605057?v=4' alt='k-kalinowski' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/g33k247' title='g33k247 is awesome!'><img src='https://avatars0.githubusercontent.com/u/8498814?v=4' alt='g33k247' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/dzmitry-lahoda' title='dzmitry-lahoda is awesome!'><img src='https://avatars3.githubusercontent.com/u/757125?v=4' alt='dzmitry-lahoda' width='45px' /></a></td>
    <td align="center"><a href='http://www.diegomunozbeltran.com/' title='diegombeltran is awesome!'><img src='https://avatars2.githubusercontent.com/u/7081281?v=4' alt='diegombeltran' width='45px' /></a></td>
    <td align="center"><a href='http://veereshr.me' title='veerreshr is awesome!'><img src='https://avatars0.githubusercontent.com/u/59141533?v=4' alt='veerreshr' width='45px' /></a></td>
    <td align="center"><a href='https://github.com/nausher' title='nausher is awesome!'><img src='https://avatars3.githubusercontent.com/u/79359?v=4' alt='nausher' width='45px' /></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification to acknowledge all contributions.

## License

Copyright 2020 Darek Kay <hello@darekkay.com>

This project and its contents are open source under the [MIT license](https://github.com/darekkay/static-marks/blob/master/LICENSE).
