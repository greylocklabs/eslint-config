/**
 * @file Rules for eslint-plugin-import
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    plugins: [ 'import' ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [ '.js', '.json' ],
            },
        },
        'import/extensions': [ '.js', '.jsx', '.vue' ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    rules: {
        'import/no-unresolved': 'error', // ensure imports point to a file/module that can be resolved
        'import/named': [ // ensure named imports correspond to a named export in the remote file
            'error',
            {
                commonjs: true,
                caseSensitive: true,
            },
        ],
        'import/default': 'error', // ensure a default export is present for default import
        'import/namespace': [ // ensure imported namespaces contain dereferenced properties as they are dereferenced
            'error',
            {
                allowComputed: true,
            },
        ],
        'import/no-restricted-paths': 'off', // restrict certain paths for given folders
        'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
        'import/no-dynamic-require': 'error', // forbid require() calls with expressions
        'import/no-internal-modules': 'off', // forbid importing submodules of other modules
        'import/no-webpack-loader-syntax': 'error', // forbid Webpack loader syntax in imports

        'import/export': 'error', // report any invalid exports, i.e. re-export of the same name
        'import/no-named-as-default': 'error', // report use of exported name as identifier of default export
        'import/no-named-as-default-member': 'error', // report use of exported name as property of default export
        'import/no-deprecated': 'off', // report imported names marked with @deprecated documentation tag
        'import/no-extraneous-dependencies': 'error', // forbid the use of extraneous packages
        'import/no-mutable-exports': 'error', // forbid mutable exports

        'import/unambiguous': 'off', // warn if a module could be mistakenly parsed as a script by a consumer
        'import/no-commonjs': 'off', // disallow require() statements
        'import/no-amd': 'error', // disallow AMD define() statements
        'import/no-nodejs-modules': 'off', // disallow internal node modules

        'import/first': [ 'error', 'absolute-first' ], // ensure all imports appear before other statements
        'import/exports-last': 'error', // ensure all exports appear after other statements
        'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
        'import/no-namespace': 'off', // report namespace imports
        'import/extensions': [ // ensure consistent use of file extension within the import path
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never',
            },
        ],
        'import/order': [ // enforce a convention in module import order
            'error',
            {
                groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
                'newlines-between': 'always',
            },
        ],
        'import/newline-after-import': 'error', // enforce a newline after import statements
        'import/prefer-default-export': 'error', // prefer a default export if module exports a single name
        'import/max-dependencies': 'off', // limit the maximum number of dependencies a module can have
        'import/no-unassigned-import': 'off', // forbid unassigned imports
        'import/no-named-default': 'error', // forbid named default exports
        'import/no-anonymous-default-export': 'off', // forbid anonymous values as default exports
    },
};
