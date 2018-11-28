# @greylocklabs/eslint-config

> Greylock Labs ESLint rules for all internal and public JavaScript projects

---

This package contains all of our ESLint rules.

[![npm version](https://badge.fury.io/js/%40greylocklabs%2Feslint-config.svg)](https://badge.fury.io/js/%40greylocklabs%2Feslint-config)
[![Build Status](https://travis-ci.org/greylocklabs/js.svg?branch=master)](https://travis-ci.org/greylocklabs/js)

## Installation

First, install the package:

```sh
$ npm install --save-dev @greylocklabs/eslint-config
```

You'll then need to install the peer dependencies; NPM doesn't have a nice way of doing that yet but for now you can
just run the following:

```sh
$ npm info "@greylocklabs/eslint-config@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "@greylocklabs/eslint-config@latest"
```

Afterwards, create a `.eslintrc` file in your root project folder and add the following:

```json
{
  "extends": "@greylocklabs"
}
```

## Configuring

To override anything, simply add a `rules` property to your `.eslintrc` file and add new or existing rules to it with
your preferred settings:

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

## Contributing

See [CONTRIBUTING.md](../.github/CONTRIBUTING.md) if you'd like to propose changes! We're always open to feedback and
suggestions.

## License

MIT License. See LICENSE file for details.
