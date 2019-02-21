module.exports = {
  plugins: [ 'import' ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.vue', '.ts', '.tsx', '.json' ],
      },
    },
    'import/extensions': [ '.js', '.jsx', '.vue', '.ts', '.tsx', '.json' ],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg)$',
    ],
  },
  rules: {
    'import/default': 'error', // ensure a default export is present for default import
    'import/dynamic-import-chunkname': 'error', // dynamic imports require a leading comment with a webpackChunkName

    'import/export': 'error', // report any invalid exports, i.e. re-export of the same name
    'import/exports-last': 'error', // ensure all exports appear after other statements
    'import/extensions': [ // ensure consistent use of file extension within the import path
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
        vue: 'never',
      },
    ],

    'import/first': [ 'error', 'absolute-first' ], // ensure all imports appear before other statements

    'import/group-exports': 'off', // allow export statements anywhere

    'import/max-dependencies': 'off', // limit the maximum number of dependencies a module can have

    'import/named': [ // ensure named imports correspond to a named export in the remote file
      'error',
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
    'import/namespace': [ 'error', { allowComputed: true } ], // ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/newline-after-import': 'error', // enforce a newline after import statements
    'import/no-absolute-path': 'error', // forbid import of modules using absolute paths
    'import/no-amd': 'error', // disallow AMD define() statements
    'import/no-anonymous-default-export': 'off', // forbid anonymous values as default exports
    'import/no-commonjs': 'off', // disallow require() statements
    'import/no-cycle': 'error', // no resolvable path back to this module via its dependencies
    'import/no-default-export': 'off', // allow default exports
    'import/no-deprecated': 'off', // report imported names marked with @deprecated documentation tag
    'import/no-duplicates': 'error', // report repeated import of the same module in multiple places
    'import/no-dynamic-require': 'error', // forbid require() calls with expressions
    'import/no-extraneous-dependencies': 'error', // forbid the use of extraneous packages
    'import/no-internal-modules': 'off', // forbid importing submodules of other modules
    'import/no-mutable-exports': 'error', // forbid mutable exports
    'import/no-named-as-default': 'error', // report use of exported name as identifier of default export
    'import/no-named-as-default-member': 'error', // report use of exported name as property of default export
    'import/no-named-default': 'error', // forbid named default exports
    'import/no-named-export': 'off', // allow named exports
    'import/no-namespace': 'off', // report namespace imports
    'import/no-nodejs-modules': 'off', // disallow internal node modules
    'import/no-relative-parent-imports': 'off', // prevent imports to folders in relative parent paths
    'import/no-restricted-paths': 'off', // restrict certain paths for given folders
    'import/no-self-import': 'error', // don't import yourself
    'import/no-unassigned-import': 'off', // forbid unassigned imports
    'import/no-unresolved': [ 'error', { caseSensitive: false } ], // ensure imports point to a file/module that can be resolved
    'import/no-useless-path-segments': 'error', // don't change directories to import more than needed
    'import/no-webpack-loader-syntax': 'error', // forbid Webpack loader syntax in imports

    'import/order': [ // enforce a convention in module import order
      'error',
      {
        groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
        'newlines-between': 'always',
      },
    ],

    'import/prefer-default-export': 'off', // prefer a default export if module exports a single name

    'import/unambiguous': 'off', // warn if a module could be mistakenly parsed as a script by a consumer
  },
};
