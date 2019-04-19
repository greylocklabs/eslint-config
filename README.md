# @greylocklabs/eslint-config

> Greylock Labs ESLint rules

---

This package contains all of our ESLint rules.

[![npm version](https://badge.fury.io/js/%40greylocklabs%2Feslint-config.svg)](https://badge.fury.io/js/%40greylocklabs%2Feslint-config)
[![Build Status](https://travis-ci.org/greylocklabs/js.svg?branch=master)](https://travis-ci.org/greylocklabs/js)

## Installation

Install the package and all of its peer dependencies:

```sh
$ npx install-peerdeps --dev @greylocklabs/eslint-config
```

Afterwards, create a `.eslintrc` file in your root project folder and add the following:

```json
{
  "extends": "@greylocklabs"
}
```

## Configuring

To override anything, simply add a `rules` property to your `.eslintrc`
file and add new or existing rules to it with your preferred settings:

```json
{
  "extends": "@greylocklabs",
  "rules": {
    "arrow-spacing": "off"
  }
}
```

## Testing

To run tests for this package, install the development dependencies with `npm install` from this folder and then run
`npm test`.

## License

MIT License. See LICENSE file for details.
