# Change Log

All notable changes to this project will be documented in this file. The format is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased](https://github.com/greylocklabs/js/compare/1.1.0...HEAD)

- N/A

## [1.1.0](https://github.com/greylocklabs/js/compare/1.0.0...1.1.0) - 2017-11-11

### Added

- Outline for style guide
- Actual test suite to make sure config works

### Fixed

- Install mdl to lint Markdown files from Travis CI

### Changed

- Stopped checking for rule MD024 in `mdl`
- [`valid-jsdoc`](https://eslint.org/docs/rules/valid-jsdoc)] - Removed description requirement since we prefer explicit @description tag
- [`lines-around-comment`](https://eslint.org/docs/rules/lines-around-comment)] - Relaxed setting to allow for classes to have block comment directly underneath

### Removed

- Placeholder tests

## [1.0.0](https://github.com/greylocklabs/js/releases/tag/1.0.0) - 2017-11-11

### Added

- Settings for all rules included in ESLint
- Settings for the import, promise, ava, and security plugins
- Placeholder tests
