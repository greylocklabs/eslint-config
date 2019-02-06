# Greylock Labs JavaScript Style Guide

> A reference for all Greylock Labs projects that use JavaScript

---

This guide assumes that you will be using [Babel][1] with the [env][2] preset to write JavaScript conforming to the
latest ECMAScript specifications (currently ES2018 / ES9). This guide is a *work in progress*; an actual style guide
will eventually be added in addition to the provided ESLint rules.

Last updated: **2/6/2019**

## Table of Contents

1. [Writing JavaScript](#writing-javascript)
2. [Project structure](#project-structure)
    - [Filenames](#filenames)
    - [Directories](#directories)
    - [Build tools](#build-tools)
3. [JSDoc](#jsdoc)
    - [File headers](#file-headers)
    - [Functions](#functions)
    - [Classes](#classes)
    - [Constants](#constants)
4. [Linting](#linting)
5. [Testing](#testing)

## Writing JavaScript

The best way to learn about the style guide is to simply start writing code that conforms to it. Install the ESLint
plugin by following the directions [here][3] and start coding!

## Project structure

This will vary greatly by project, but there are some general guidelines to follow:

### Filenames

Filenames should be lowercase, with separate words separated by dashes `-`. Examples:

```txt
file.js
important-file.js
```

The entry point to any Node.js module should be named `index.js`, so that the entire directory can be imported without
needing a filename.

### Directories

This will vary by the type of project, but these general rules apply:

1. Source code - `src`
2. Tests - `test`
    - Tests should be separated into subfolders by type; i.e. `test/unit`, `test/e2e`, etc.
    - Alternatively, unit tests can be placed in the same directory
3. Compiled code (i.e. Babel output, minified code) - `dist`
4. Build tools - `build`
5. Documentation - `docs`

### Build tools

Avoid the use of tools like Grunt and Gulp to run tasks, instead preferring NPM scripts. For complex front-end projects,
tools like [Webpack][9] and [Browserify][10] are recommended.

## JSDoc

While not all projects demand code comments, if JSDoc is going to be used, follow the guidelines below:

### File headers

At the top of every file there should be basic information about the file. At minimum, you need the `@file`, `@author`,
and `@copyright` annotations. For modules, use the `@module` annotation as well. Example:

```js
/**
 * @file Brief overview of the file
 * @module moduleName
 *
 * @author Your Name <you@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2018 Greylock Labs. See LICENSE file.
 */
```

### Functions

Functions, which should be declared using the function expression syntax, should also be documented with comments. The
following is required:

1. Function description at the top
2. `@public` or `@private` tag
3. `@param` tags for each argument
    - Required parameters: `@param {type} name - Description`
    - Optional parameters: `@param {type} [name] - Description`
    - Optional parameters with default values: `@param {type} [name=defaultValue] - Description`
4. `@returns {type} Description`
5. `@throws {type} Description` (should always be an `Error` or a type that extends `Error`)

Example (note the newlines between certain tags; follow this style exactly):

```js
/**
 * Adds two numbers and prints out the result to the console
 * @public
 *
 * @param {number} a - Left side
 * @param {number} b - Right side
 * @param {number} [c=0] - Optional third number to add
 *
 * @returns {number} The sum of a and b, and optionally c
 */
const addAndPrintResult = (a: number, b: number, c: number = 0) => {
    const res = a + b + c;

    console.log(res);
    return res;
};
```

### Classes

ES6 classes shouldn't be used in most cases (prefer factory functions), but if needed, follow this style. Example:

```js
/**
 * Represents a Person
 * @extends Mammal
 */
class Person extends Mammal {
    /**
     * Creates a new Person instance
     * @public
     *
     * @param {string} name - Name of person
     * @param {number} age - Person's age
     * @param {('male'|'female'|'other')} gender - Person's gender identity
     */
    constructor(name: string, age: number, gender: string) {
        super(gender);

        this.name = name;
        this.age = age;
    }

    /**
     * Returns a list of sports that people play
     * @public
     *
     * @returns {string[]} List of sports
     */
    static sports(): string[] => [ 'soccer', 'football', 'baseball', 'swimming' ];

    /**
     * Prints out the person's name
     * @public
     */
    sayName() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
```

### Constants

Important constants need to be documented with a description and `@type` tag. Example:

```js
/**
 * The most important number of all time
 * @type {number}
 */
const VERY_IMPORTANT = 1;
```

## Linting

Use ESLint with our [configuration][3]. For projects that use Markdown files, use [Markdownlint][12] with the
config file from [this project][11].

## Testing

The [AVA][4] library should be used in most cases, with [Istanbul][5] for code coverage. For load testing,
use [Artillery][6]. When browser testing is required, use [WebDriver][7]. For React projects, use [Jest][8],

[1]: https://babeljs.io
[2]: https://github.com/babel/babel/tree/master/packages/babel-preset-env
[3]: https://www.npmjs.com/package/@greylocklabs/eslint-config
[4]: https://ava.li
[5]: https://istanbul.js.org
[6]: https://artillery.io
[7]: http://webdriver.io
[8]: https://jestjs.io
[9]: http://webpack.js.org
[10]: http://browserify.org
[11]: https://github.com/greylocklabs/js/blob/master/.markdownlintrc
[12]: https://github.com/DavidAnson/markdownlint
