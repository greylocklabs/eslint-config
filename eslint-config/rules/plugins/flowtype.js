/**
 * @file Rules for eslint-plugin-flowtype
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    parser: 'babel-eslint',
    plugins: [ 'flowtype' ],
    rules: {
        'flowtype/boolean-style': [ 'error', 'boolean' ],

        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': 'off',

        'flowtype/generic-spacing': [ 'error', 'never' ],

        'flowtype/newline-after-flow-annotation': 'error', // expect newline after @flow annotation
        'flowtype/no-dupe-keys': 'off', // duplicates eslint no-dupe-keys rule
        'flowtype/no-existential-type': 'off', // allow * type inference
        'flowtype/no-flow-fix-me-comments': 'warn',
        'flowtype/no-mutable-array': 'off',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-unused-expressions': 'off',
        'flowtype/no-weak-types': 'off',

        'flowtype/object-type-delimiter': [ 'error', 'comma' ],

        'flowtype/require-exact-type': 'error',
        'flowtype/require-parameter-type': 'error',
        'flowtype/require-return-type': 'error',
        'flowtype/require-types-at-top': 'error', // type declarations must be directly after import declarations
        'flowtype/require-valid-file-annotation': 'error',
        'flowtype/require-variable-type': 'off', // TODO: https://github.com/gajus/eslint-plugin-flowtype/issues/309

        'flowtype/semi': 'off',
        'flowtype/sort-keys': 'off',
        'flowtype/space-after-type-colon': [ 'error', 'always' ],
        'flowtype/space-before-generic-bracket': [ 'error', 'never' ],
        'flowtype/space-before-type-colon': [ 'error', 'never' ],

        'flowtype/type-id-match': 'off',
        'flowtype/type-import-style': [ 'error', 'identifier' ], // prefer import { type T } to import type { T }

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
