# Change Log

All notable changes to this project will be documented in this file. The format is based on
[Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased](https://github.com/greylocklabs/js/compare/1.8.2...HEAD)

- N/A

## [1.8.2][33] - 2018-01-17

## Fixed

- Add Markdownlint-CLI dependency (broke Travis build)

## [1.8.1][32] - 2018-01-17

## Added

- [`implicit-arrow-linebreak`][31] - No line break between ES6 arrow and function body
- [`flowtype/no-flow-fix-me-comments`][30] - Add warning for `$FlowFixMe` comments in Flow-enabled projects

### Changed

- Bump version after some changes to project config (no rule changes)

## [1.8.0][29] - 2017-11-18

### Changed

- [`security/detect-non-literal-fs-filename`][28] - Turn off to allow variables when using `fs.writeFile` in Node.js

## [1.7.0][27] - 2017-11-17

### Changed

- [`import/namespace`][26] - Allow computed properties

## [1.6.0][25] - 2017-11-15

### Changed

- [`prefer-destructuring`][24] - Turn off for arrays

## [1.5.0][23] - 2017-11-15

### Changed

- Turn off [`no-magic-numbers`][21] - too annoying when writing tests, etc.
- Turn off [`no-undefined`][22] - too annoying when writing tests, etc.

## [1.4.1][20] - 2017-11-15

### Fixed

- Switch out `prepare` for `prepublishOnly`

## [1.4.0][19] - 2017-11-15

### Changed

- [`no-param-reassign`][10] - Allow modifications to the properties of function arguments
- [`arrow-parens`][11] - Always use () around arrow function params
- [`object-shorthand`][12] - Relaxed rule to `consistent-as-needed` setting
- [`func-style`][13] - Allow for arrow functions
- [`eslint-plugin-flowtype`][14] changes:
    - [`flowtype/require-parameter-type`][15] - now throws error
    - [`flowtype/require-return-type`][16] - now throws error
    - [`flowtype/require-valid-file-annotation`][17] - now throws error
- [`eslint-plugin-security`][18] - Allow for object bracket notation

## [1.3.0][9] - 2017-11-13

### Added

- Support for Flow via [eslint-plugin-flowtype][8]
    - Optional for projects that don't use flow - only checks files with flow annotation

## [1.2.0][7] - 2017-11-13

### Changed

- Relax rules for [`eslint-plugin-promise`][6]:
    - Turn off `promise/avoid-new`
    - Turn off `promise/prefer-await-to-callbacks`

## [1.1.0][5] - 2017-11-11

### Added

- Outline for style guide
- Actual test suite to make sure config works

### Fixed

- Install mdl to lint Markdown files from Travis CI

### Changed

- Stopped checking for rule MD024 in `mdl`
- [`valid-jsdoc`][2] - Removed description requirement since we prefer explicit `@description` tag
- [`lines-around-comment`][3] - Relaxed setting to allow for classes to have block comment directly underneath
- [`no-param-reassign`][4] - Added `t` for AVA test context

### Removed

- Support for Node versions before 6.0; 4.0 LTS support ends in 6 months anyway
- Placeholder tests

## [1.0.0][1] - 2017-11-11

### Added

- Settings for all rules included in ESLint
- Settings for the import, promise, ava, and security plugins
- Placeholder tests

[1]: https://github.com/greylocklabs/js/releases/tag/1.0.0
[2]: https://eslint.org/docs/rules/valid-jsdoc
[3]: https://eslint.org/docs/rules/lines-around-comment
[4]: https://eslint.org/docs/rules/no-param-reassign
[5]: https://github.com/greylocklabs/js/compare/1.0.0...1.1.0
[6]: https://github.com/xjamundx/eslint-plugin-promise
[7]: https://github.com/greylocklabs/js/compare/1.1.0...1.2.0
[8]: https://github.com/gajus/eslint-plugin-flowtype
[9]: https://github.com/greylocklabs/js/compare/1.2.0...1.3.0
[10]: https://eslint.org/docs/rules/no-param-reassign
[11]: https://eslint.org/docs/rules/arrow-parens
[12]: https://eslint.org/docs/rules/object-shorthand
[13]: https://eslint.org/docs/rules/func-style
[14]: https://github.com/gajus/eslint-plugin-flowtype
[15]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
[16]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
[17]: https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
[18]: https://github.com/nodesecurity/eslint-plugin-security
[19]: https://github.com/greylocklabs/js/compare/1.3.0...1.4.0
[20]: https://github.com/greylocklabs/js/compare/1.4.0...1.4.1
[21]: https://eslint.org/docs/rules/no-magic-numbers
[22]: https://eslint.org/docs/rules/no-undefined
[23]: https://github.com/greylocklabs/js/compare/1.4.1...1.5.0
[24]: https://eslint.org/docs/rules/prefer-destructuring
[25]: https://github.com/greylocklabs/js/compare/1.5.0...1.6.0
[26]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
[27]: https://github.com/greylocklabs/js/compare/1.6.0...1.7.0
[28]: https://github.com/nodesecurity/eslint-plugin-security#detect-non-literal-fs-filename
[29]: https://github.com/greylocklabs/js/compare/1.7.0...1.8.0
[30]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-flow-fix-me-comments
[31]: https://eslint.org/docs/rules/implicit-arrow-linebreak
[32]: https://github.com/greylocklabs/js/compare/1.8.0...1.8.1
[33]: https://github.com/greylocklabs/js/compare/1.8.1...1.8.2
