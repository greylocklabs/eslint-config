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

## Plugins

We rely on and have set rules for the following plugins:

1. [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava)
2. [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
3. [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
4. [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
5. [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
6. [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

Note that since Flow is still under heavy development and has some issues in applications with a large amount of
dependencies, you can omit using it by simply not including the `/* @flow */` comment at the top of your JavaScript
files.

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
