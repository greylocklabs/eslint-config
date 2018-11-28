/**
 * @file Rules for eslint-plugin-typescript
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  plugins: [ 'typescript' ],
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'typescript/adjacent-overload-signatures': 'error', // Group overloaded signatures together

    'typescript/class-name-casing': 'error', // PascalCase for classes and interfaces

    'typescript/explicit-function-return-type': [ // require defined return type
      'error',
      {
        allowExpressions: true,
      },
    ],
    'typescript/explicit-member-accessibility': 'off', // enforce private / public

    'typescript/generic-type-naming': [ 'error', 'T' ], // generics are always named "T"

    'typescript/interface-name-prefix': [ 'error', 'never' ], // never prefix an interface name with "I"

    'typescript/member-delimiter-style': 'error', // use semicolon delimiters
    'typescript/member-naming': 'off', // don't enforce conventions for member naming
    'typescript/member-ordering': 'error', // enforce order of members by type / scope / etc.

    'typescript/no-angle-bracket-type-assertion': 'error', // .tsx can't be parsed without the "as Type" style
    'typescript/no-array-constructor': 'error', // disallow Array constructor
    'typescript/no-empty-interface': 'error', // disallow empty interfaces
    'typescript/no-explicit-any': 'error', // no any types
    'typescript/no-inferrable-types': 'error', // don't define type for primitive types since they're easily inferred
    'typescript/no-namespace': 'error', // prefer es6 style modules to outdated module/namespace syntax
    'typescript/no-non-null-assertion': 'off', // allow for foo.bar!.baz instead of foo.bar && foo.bar.baz
    'typescript/no-parameter-properties': 'off', // allow param props like readonly and private
    'typescript/no-triple-slash-reference': 'error', // no longer needed due to es6 modules
    'typescript/no-type-alias': 'error', // prefer interface to type literal
    'typescript/no-unused-vars': 'error', // no unused types / interfaces / etc.
    'typescript/no-use-before-define': 'error', // no hoisting
    'typescript/no-var-requires': 'error', // prefer es6 import

    'typescript/prefer-namespace-keyword': 'off', // prefer es6 modules

    'typescript/type-annotation-spacing': 'error', // consistent spacing around annotations
  },
};
