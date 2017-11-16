/**
 * @file Rules for eslint-plugin-flowtype
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    parser: 'babel-eslint',
    plugins: [ 'flowtype' ],
    rules: {
        'flowtype/boolean-style': [ 'error', 'boolean' ],

        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': 'off',

        'flowtype/generic-spacing': [ 'error', 'never' ],

        'flowtype/no-dupe-keys': 'off', // duplicates eslint no-dupe-keys rule
        'flowtype/no-mutable-array': 'off',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-unused-expressions': 'off',
        'flowtype/no-weak-types': 'off',

        'flowtype/object-type-delimiter': [ 'error', 'comma' ],

        'flowtype/require-parameter-type': 'error',
        'flowtype/require-return-type': 'error',
        'flowtype/require-valid-file-annotation': 'error',
        'flowtype/require-variable-type': 'error',

        'flowtype/semi': 'off',
        'flowtype/sort-keys': 'off',
        'flowtype/space-after-type-colon': [ 'error', 'always' ],
        'flowtype/space-before-generic-bracket': [ 'error', 'never' ],
        'flowtype/space-before-type-colon': [ 'error', 'never' ],

        'flowtype/type-id-match': 'off',

        'flowtype/union-intersection-spacing': [ 'error', 'always' ],
        'flowtype/use-flow-type': 'warn',

        'flowtype/valid-syntax': 'warn',
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
};
