# Change Log

All notable changes to this project will be documented in this file. The format is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased](https://github.com/greylocklabs/js/compare/1.4.1...HEAD)

- N/A

## [1.4.1](https://github.com/greylocklabs/js/compare/1.4.0...1.4.1) - 2017-11-15

### Fixed

- Switch out `prepare` for `prepublishOnly`

## [1.4.0](https://github.com/greylocklabs/js/compare/1.3.0...1.4.0) - 2017-11-15

### Changed

- [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign) - Allow modifications to the properties of function arguments
- [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens) - Always use () around arrow function params
- [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand) - Relaxed rule to `consistent-as-needed` setting
- [`func-style`](https://eslint.org/docs/rules/func-style) - Allow for arrow functions
- [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype) changes:
    - [`flowtype/require-parameter-type`](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type) - now throws error
    - [`flowtype/require-return-type`](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type) - now throws error
    - [`flowtype/require-valid-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation) - now throws error
- [`eslint-plugin-security`](https://github.com/nodesecurity/eslint-plugin-security) - Allow for object bracket notation

## [1.3.0](https://github.com/greylocklabs/js/compare/1.2.0...1.3.0) - 2017-11-13

### Added

- Support for Flow via [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
    - Optional for projects that don't use flow - only checks files with flow annotation

## [1.2.0](https://github.com/greylocklabs/js/compare/1.1.0...1.2.0) - 2017-11-13

### Changed

- Relax rules for [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise):
    - Turn off `promise/avoid-new`
    - Turn off `promise/prefer-await-to-callbacks`

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
- [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign)] - Added `t` for AVA test context

### Removed

- Support for Node versions before 6.0; 4.0 LTS support ends in 6 months anyway
- Placeholder tests

## [1.0.0](https://github.com/greylocklabs/js/releases/tag/1.0.0) - 2017-11-11

### Added

- Settings for all rules included in ESLint
- Settings for the import, promise, ava, and security plugins
- Placeholder tests
