/**
 * @file Rules from the Possible Errors section: https://eslint.org/docs/rules/#possible-errors
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    rules: {
        'for-direction': 'error', // for loop counter should move in right direction

        'getter-return': 'error', // property getters need return statement

        'no-await-in-loop': 'error', // avoid await statement inside a loop
        'no-compare-neg-zero': 'error', // don't compare to -0
        'no-cond-assign': [ 'error', 'always' ], // no assignment inside conditional statements
        'no-console': 'warn', // warn when console.log / etc is used
        'no-constant-condition': 'error', // no stuff such as if (true)
        'no-control-regex': 'error', // no control characters in regular expressions
        'no-debugger': 'error', // use a more modern debugging environment instead
        'no-dupe-args': 'error', // no duplicate argument names in functions
        'no-dupe-keys': 'error', // no duplicate keys in object literals
        'no-duplicate-case': 'error', // no duplicate case labels
        'no-empty': 'error', // no empty blocks
        'no-empty-character-class': 'error', // disallow the use of empty character classes in regular expressions
        'no-ex-assign': 'error', // disallow assigning to the exception in a catch block
        'no-extra-boolean-cast': 'error', // disallow double-negation boolean casts in a boolean context
        'no-extra-parens': 'off', // allow extra parentheses for readability
        'no-extra-semi': 'error', // don't use extra semicolons
        'no-func-assign': 'error', // no reassigning function declarations
        'no-inner-declarations': 'error', // don't declare functions or variables inside nested blocks
        'no-invalid-regexp': 'error', // disallow invalid regular expressions inside RegExp constructs
        'no-irregular-whitespace': 'error', // disallow irregular whitespace outisde of strings and comments
        'no-obj-calls': 'error', // no using builtin objects as functions, i.e. Math()
        'no-prototype-builtins': 'error', // disallow using Object.prototype methods directly
        'no-regex-spaces': 'error', // disallow multiple spaces in regex literal
        'no-sparse-arrays': 'error', // no empty slots in arrays
        'no-template-curly-in-string': 'error', // don't use template literal in regular strings
        'no-unexpected-multiline': 'error', // disallow line breaks that make one expression look like two
        'no-unreachable': 'error', // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unsafe-finally': 'error', // disallow return/throw/break/continue inside finally blocks
        'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators

        'use-isnan': 'error', // prefer isNaN() to comparisons

        'valid-jsdoc': [ // enforce valid jsdoc comments
            'warn',
            {
                prefer: {
                    arg: 'param',
                    argument: 'param',
                    class: 'class',
                    return: 'returns',
                },
                preferType: {
                    Boolean: 'boolean',
                    Number: 'number',
                    object: 'Object',
                    String: 'string',
                },
                requireParamDescription: true,
                requireReturnDescription: true,
                requireReturnType: true,
            },
        ],
        'valid-typeof': [ 'error', { requireStringLiterals: true } ], // require typeof operator to be compared against string
    },
};
