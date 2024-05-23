# Changelog

## [Unreleased]

- :boom: Drop Node 16 support (EOL).
- :hammer: Switch from yarn to npm.
- :book: Add a troubleshooting section ([#46]).

## [3.0.0] - 2023-06-24

- :boom: Drop Node 14 support (EOL).
- :hammer: Update dependencies.

## [2.4.1] - 2022-04-05

- :gem: Include new app icons ([#33]).
- :hammer: Update dependencies.

## [2.4.0] - 2022-01-23

- :rocket: Enable adding a custom browser search engine from the filter input ([#30]).
- :rocket: Add hover title to the "open all bookmarks" button ([#29]).
- :gem: Include dark mode ([#11]).
- :gem: Use consistent icons from Font Awesome 5.
- :book: Clarify usage of multiple bookmark files ([#28]).
- :hammer: Update dependencies.
- :hammer: Switch npm scripts to [@darekkay/scripts](https://www.npmjs.com/package/@darekkay/scripts).

## [2.3.0] - 2021-05-12

- :gem: Include a proper focus ring.
- :bug: Fix print stylesheet.
- :hammer: Remove app manifest.
- :hammer: Modernize frontend code.
- :hammer: Migrate to Vite.
- :hammer: Update dependencies.

## [2.2.7] - 2021-04-01

- :hammer: Update logger dependency.

## [2.2.6] - 2021-03-31

- :hammer: Lower minimal supported node version to `12.0.0`.

## [2.2.5] - 2021-03-21

- :book: Add documentation for GitLab Pages integration.
- :hammer: Add CLI unit tests.
- :hammer: Update dependencies.

## [2.2.4] - 2020-10-19

- :sparkles: List duplicate links in the report ([#8]).
- :rocket: Use URL as label if no explicit label is available ([#21]).
- :rocket: Exclude first-level notes from bookmark count ([#19]).
- :book: Improve project documentation and demo examples.

## [2.2.3] - 2020-10-06

- :rocket: Treat notes starting with http and https as links ([#12]).
- :book: Include project contributors.

## [2.2.2] - 2020-10-03

- :bug: Fix imports from Raindrop.io ([#14]).

## [2.2.1] - 2020-10-01

- :rocket: Autofocus search field after loading the page or clearing the input.
- :hammer: Update dependencies.

## [2.2.0] - 2020-06-27

- :rocket: Abort the process if at least one YAML file is malformed.
- :rocket: Include bookmark URL in the filter.

## [2.1.0] - 2020-05-01

- :sparkles: Redesign the UI.
- :sparkles: Enable first-level notes.
- :sparkles: Include a `report` feature.

## [2.0.5] - 2019-10-31

- :hammer: Republish package with LF line endings.

## [2.0.4] - 2019-10-31

- :rocket: Show an error and help if a CLI command is missing.
- :hammer: Update dependencies.

## [2.0.3] - 2019-07-17

- :bug: Fix search field cut-off on mobile.
- :hammer: Update dependencies.

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

- :hammer: Update outdated template file.

## [1.0.5] - 2019-04-06

- :hammer: Update dependencies.
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

[#8]: https://github.com/darekkay/static-marks/issues/8
[#11]: https://github.com/darekkay/static-marks/issues/11
[#12]: https://github.com/darekkay/static-marks/issues/12
[#14]: https://github.com/darekkay/static-marks/issues/14
[#19]: https://github.com/darekkay/static-marks/issues/19
[#21]: https://github.com/darekkay/static-marks/issues/21
[#28]: https://github.com/darekkay/static-marks/issues/28
[#29]: https://github.com/darekkay/static-marks/issues/29
[#30]: https://github.com/darekkay/static-marks/issues/30
[#33]: https://github.com/darekkay/static-marks/issues/33
[#46]: https://github.com/darekkay/static-marks/issues/46

---

[unreleased]: https://github.com/darekkay/static-marks/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/darekkay/static-marks/compare/v2.4.1...v3.0.0
[2.4.1]: https://github.com/darekkay/static-marks/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/darekkay/static-marks/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/darekkay/static-marks/compare/v2.2.7...v2.3.0
[2.2.7]: https://github.com/darekkay/static-marks/compare/v2.2.6...v2.2.7
[2.2.6]: https://github.com/darekkay/static-marks/compare/v2.2.5...v2.2.6
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
