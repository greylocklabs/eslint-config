/**
 * @file Rules from the Best Practices section: https://eslint.org/docs/rules/#best-practices
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

const complexity = 15;

module.exports = {
    rules: {
        'accessor-pairs': 'error', // enforces having a 'get' method if a 'set' method is present in an object
        'array-callback-return': 'error', // enforces return statements in the callback functions of array methods

        'block-scoped-var': 'error', // treat variables declared with 'var' as if they were block scoped

        'class-methods-use-this': 'error', // class methods that don't use 'this' should be written as static methods
        complexity: [ 'error', complexity ], // max number of independent paths in a function
        'consistent-return': [ 'error', { treatUndefinedAsUnspecified: false } ], // return statements must always or never specify a value
        curly: [ 'error', 'all' ], // always use curly braces in block statements

        'default-case': 'error', // switch statements must have a default case
        'dot-location': [ 'error', 'property' ], // if object separates properties by newlines, dot should come on same line as property
        'dot-notation': 'error', // always prefer dot notation over bracket notation when possible

        eqeqeq: 'error', // always use === and !==

        'guard-for-in': 'off', // don't warn about for-in loops without filter

        'no-alert': 'warn', // disallow use of alert prompts in favor of less obtrusive custom UI elements
        'no-caller': 'error', // arguments.caller is deprecated
        'no-case-declarations': 'error', // disallow declaring variables inside of switch cases not wrapped in blocks
        'no-div-regex': 'off', // allow regex that might look like division operator
        'no-else-return': 'error', // return inside else block is unnecessary
        'no-empty-function': 'error', // empty functions must at the very least contain a comment
        'no-empty-pattern': 'error', // no destructuring without creating variables
        'no-eq-null': 'error', // no == and != when comparing against null
        'no-eval': 'error', // eval() can be dangerous and lead to code injection attacks
        'no-extend-native': 'error', // don't extend the prototypes of native objects, it's confusing
        'no-extra-bind': 'error', // disallow bind() use without 'this'
        'no-extra-label': 'error', // disallow labels in loops that don't contain nested loops
        'no-fallthrough': 'error', // switch cases must end in break; statement
        'no-floating-decimal': 'error', // no .5 or 5.
        'no-global-assign': 'error', // no reassignment of built-in globals
        'no-implicit-coercion': 'error', // disallow shorthand type conversions for the sake of readability
        'no-implicit-globals': 'off', // allow for global functions and variables
        'no-implied-eval': 'error', // no using eval-like methods to run potentially unsafe code
        'no-invalid-this': 'error', // only use this inside classes or class-like objects
        'no-iterator': 'error', // no using the __iterator__ property
        'no-labels': 'error', // disallow use of labels
        'no-lone-blocks': 'error', // no unnecessary nested blocks in es5 environments
        'no-loop-func': 'error', // no creating functions within loops
        'no-magic-numbers': [ // allow for magic numbers
            'off',
            {
                detectObjects: false,
                enforceConst: true,
                ignore: [
                    -1,
                    0,
                    1,
                ],
                ignoreArrayIndexes: true,
            },
        ],
        'no-multi-spaces': 'error', // avoid multiple spaces
        'no-multi-str': 'error', // disallow es5-style multiline strings separated by backslashes
        'no-new': 'error', // disallow use of 'new' keyword outside of assignment
        'no-new-func': 'error', // don't declare functions using new Function()
        'no-new-wrappers': 'error', // prefer String(value) over new String(value)
        'no-octal': 'error', // remove old-style octal literals
        'no-octal-escape': 'error', // prefer unicode escape codes over old-style octal escape
        'no-param-reassign': [ // disallow reassigning function arguments except in specific cases
            'error',
            {
                props: false,
            },
        ],
        'no-proto': 'error', // __proto__ is deprecated
        'no-redeclare': 'error', // cannot redeclare variables
        'no-restricted-properties': [
            'error',
            {
                object: 'arguments',
                property: 'callee',
                message: 'arguments.callee is deprecated',
            },
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
        ],
        'no-return-assign': 'error', // no assignment within return statements
        'no-return-await': 'error', // 'return await x()' is useless in async functions
        'no-script-url': 'error', // no javascript: URLs as they can be unsafe in a manner similar to eval()
        'no-self-assign': 'error', // doing something like x = x is pointless
        'no-self-compare': 'error', // don't compare a variable to itself
        'no-sequences': 'error', // no comma operator to put multiple expressions on the same line
        'no-throw-literal': 'error', // only throw Error objects
        'no-unmodified-loop-condition': 'off', // loop conditions don't need to be modified
        'no-unused-expressions': 'error', // no unused expressions that don't affect program state
        'no-unused-labels': 'error', // no unused labels
        'no-useless-call': 'error', // no unneeded .call() and .apply()
        'no-useless-concat': 'error', // don't do "a" + "b" when you can do "ab"
        'no-useless-escape': 'error', // disallow unnecessary string ecape characters
        'no-useless-return': 'error', // no unnecessary return statements
        'no-void': 'error', // don't use the void operator
        'no-warning-comments': [ // show warning for certain TODO-type comments
            'warn',
            {
                terms: [
                    'tbd',
                    'todo',
                    'fixme',
                    'xxx',
                ],
                location: 'start',
            },
        ],
        'no-with': 'error', // disallow use of with statement

        'prefer-promise-reject-errors': 'error', // promises should be rejected using an Error object only

        radix: [ 'error', 'as-needed' ], // parseInt() must include radix except for base 10 integers
        'require-await': 'off', // async functions don't need await
        'vars-on-top': 'error', // variables must be at the top of their containing scope

        'wrap-iife': [ 'error', 'outside' ], // IIFEs must be wrapped in parentheses

        yoda: 'error', // prefer if (color === 'red') over if ('red' === color) for readability and consistency
    },
};
