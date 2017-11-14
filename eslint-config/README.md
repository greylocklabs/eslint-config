# Greylock Labs ESLint Configuration

Greylock Labs ESLint rules for all internal and public JavaScript projects

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

MIT License

Copyright (c) 2017 Greylock Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
