## Unreleased
- :sparkles: Import bookmarks from Chrome, Firefox or Pocket.
- :boom: BREAKING CHANGE: The CLI interface was refactored to support subcommands. To build a bookmarks app, use the `build` command: `static-marks [options] build <files>`.
- :boom: BREAKING CHANGE: Input file argument(s) are now required (previously the current folder was used as fallback).
- :book: Improve and unify the documentation.

## 1.0.8 (2019-04-28)
- :sparkles: Add support for custom web page templates.

## 1.0.7 (2019-04-16)
- :gem: Improve header design.
- :bug: Fix menu items being focusable while hidden.

## 1.0.6 (2019-04-06)
- :construction_worker: Update outdated template file.

## 1.0.5 (2019-04-06)
- :construction_worker: Update dependencies.
- :book: Add link to the unofficial docker container.

## 1.0.4 (2018-12-13)

- :sparkles: Display the source file name for each collection on mouse hover.
  - When using multiple bookmark files, it is now easier to find the file where a bookmark is defined in.
- :rocket: Match the collection name in the filter.
- :rocket: Inline the Favicon.
- :construction_worker_man: Include app version in the footer.

## 1.0.3 (2018-11-16)

- :bug: Re-add missing cross icon used to clear the current filter.

## 1.0.2 (2018-11-11)

- :sparkles: Highlight selected project in the project list.
- :gem: Improve design.
- :construction_worker_man: Update dependencies.

## 1.0.1 (2018-06-27)

- :sparkles: Make document title configurable via `--title` cli argument.
- :sparkles: Prefill search value with `?search=value` URL param for all [supported browsers](https://caniuse.com/#feat=urlsearchparams).

## 1.0.0-beta (2018-04-03)

- :tada: Initial release.
