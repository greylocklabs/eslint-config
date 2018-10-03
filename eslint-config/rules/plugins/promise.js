/**
 * @file Rules for eslint-plugin-promise
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [ 'promise' ],
  rules: {
    'promise/catch-or-return': 'error', // enforces the use of catch() on un-returned promises
    'promise/no-return-wrap': 'error', // avoid wrapping values in Promise.resolve or Promise.reject when not needed
    'promise/param-names': 'error', // enforce standard parameter names for Promise constructors
    'promise/always-return': 'error', // return inside each then() to create readable and reusable Promise chains

    'promise/no-nesting': 'warn', // avoid nested then() or catch() statements
    'promise/no-promise-in-callback': 'warn', // avoid using promises inside of callbacks
    'promise/no-callback-in-promise': 'warn', // avoid calling cb() inside of a then() (use nodeify instead)
    'promise/avoid-new': 'off', // avoid creating new promises outside of utility libs (use pify instead)
    'promise/no-return-in-finally': 'warn', // disallow return statements in finally()

    'promise/no-native': 'off', // in an ES5 environment, make sure to create a Promise constructor before using
    'promise/no-new-statics': 'error', // Calling a Promise static method with new is invalid

    'promise/prefer-await-to-then': 'error', // prefer await to then() for reading Promise values
    'promise/prefer-await-to-callbacks': 'off', // prefer async/await to the callback pattern

    'promise/valid-params': 'error', // Ensures the proper number of arguments are passed to Promise functions
  },
};
