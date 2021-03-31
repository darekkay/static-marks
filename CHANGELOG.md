# Changelog

## [Unreleased]

- :construction_worker: Lower minimal supported node version to `12.0.0`.

## [2.2.5] - 2021-03-21

- :book: Add documentation for GitLab Pages integration.
- :construction_worker: Add CLI unit tests.
- :construction_worker: Update dependencies.

## [2.2.4] - 2020-10-19

- :sparkles: List duplicate links in the report (#8).
- :rocket: Use URL as label if no explicit label is available (#21).
- :rocket: Exclude first-level notes from bookmark count (#19).
- :book: Improve project documentation and demo examples.

## [2.2.3] - 2020-10-06

- :rocket: Treat notes starting with http and https as links (#12).
- :book: Include project contributors.

## [2.2.2] - 2020-10-03

- :bug: Fix imports from Raindrop.io (#14).

## [2.2.1] - 2020-10-01

- :rocket: Autofocus search field after loading the page or clearing the input.
- :construction_worker: Update dependencies.

## [2.2.0] - 2020-06-27

- :rocket: Abort the process if at least one YAML file is malformed.
- :rocket: Include bookmark URL in the filter.

## [2.1.0] - 2020-05-01

- :sparkles: Redesign the UI.
- :sparkles: Enable first-level notes.
- :sparkles: Include a `report` feature.

## [2.0.5] - 2019-10-31

- :construction_worker: Republish package with LF line endings.

## [2.0.4] - 2019-10-31

- :rocket: Show an error and help if a CLI command is missing.
- :construction_worker: Update dependencies.

## [2.0.3] - 2019-07-17

- :bug: Fix search field cut-off on mobile.
- :construction_worker: Update dependencies.

## [2.0.2] - 2019-06-01

- :bug: Publish package with LF line endings for yarn (see [#5480](https://github.com/yarnpkg/yarn/issues/5480)).

## [2.0.1] - 2019-05-15

- :bug: Fix bookmarklets containing `</script>`.

## [2.0.0] - 2019-05-02

- :sparkles: Import bookmarks from Chrome, Firefox or Pocket.
- :boom: BREAKING CHANGE: The CLI interface was refactored to support subcommands. To build a bookmarks app, use the `build` command: `static-marks [options] build <files>`.
- :boom: BREAKING CHANGE: Input file argument(s) are now required (previously the current folder was used as fallback).
- :book: Improve and unify the documentation.

## [1.0.8] - 2019-04-28

- :sparkles: Add support for custom web page templates.

## [1.0.7] - 2019-04-16

- :gem: Improve header design.
- :bug: Fix menu items being focusable while hidden.

## [1.0.6] - 2019-04-06

- :construction_worker: Update outdated template file.

## [1.0.5] - 2019-04-06

- :construction_worker: Update dependencies.
- :book: Add link to the unofficial docker container.

## [1.0.4] - 2018-12-13

- :sparkles: Display the source file name for each collection on mouse hover.
  - When using multiple bookmark files, it is now easier to find the file where a bookmark is defined in.
- :rocket: Match the collection name in the filter.
- :rocket: Inline the Favicon.
- :construction_worker_man: Include app version in the footer.

## [1.0.3] - 2018-11-16

- :bug: Re-add missing cross icon used to clear the current filter.

## [1.0.2] - 2018-11-11

- :sparkles: Highlight selected project in the project list.
- :gem: Improve design.
- :construction_worker_man: Update dependencies.

## [1.0.1] - 2018-06-27

- :sparkles: Make document title configurable via `--title` cli argument.
- :sparkles: Prefill search value with `?search=value` URL param for all [supported browsers](https://caniuse.com/#feat=urlsearchparams).

## 1.0.0 - 2018-04-03

- :tada: Initial release.

[Unreleased]: https://github.com/darekkay/static-marks/compare/v2.2.5...HEAD
[2.2.5]: https://github.com/darekkay/static-marks/compare/v2.2.4...v2.2.5
[2.2.4]: https://github.com/darekkay/static-marks/compare/v2.2.3...v2.2.4
[2.2.3]: https://github.com/darekkay/static-marks/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/darekkay/static-marks/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/darekkay/static-marks/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/darekkay/static-marks/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/darekkay/static-marks/compare/v2.0.5...v2.1.0
[2.0.5]: https://github.com/darekkay/static-marks/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/darekkay/static-marks/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/darekkay/static-marks/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/darekkay/static-marks/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/darekkay/static-marks/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/darekkay/static-marks/compare/v1.0.8...v2.0.0
[1.0.8]: https://github.com/darekkay/static-marks/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/darekkay/static-marks/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/darekkay/static-marks/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/darekkay/static-marks/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/darekkay/static-marks/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/darekkay/static-marks/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/darekkay/static-marks/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/darekkay/static-marks/compare/tag/v1.0.1
