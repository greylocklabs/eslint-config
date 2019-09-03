module.exports = {
  plugins: [ '@typescript-eslint' ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error', // group overloaded signatures together

    '@typescript-eslint/class-name-casing': 'error', // PascalCase for classes and interfaces
    '@typescript-eslint/consistent-type-assertions': [ // standardise use of type assertion style
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never', // prefer interfaces
      },
    ],

    '@typescript-eslint/explicit-function-return-type': [ // require defined return type
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off', // enforce private / public

    '@typescript-eslint/generic-type-naming': [ 'error', 'T' ], // generics are always named "T"

    '@typescript-eslint/interface-name-prefix': [ 'error', 'never' ], // never prefix an interface name with "I"

    '@typescript-eslint/member-delimiter-style': 'error', // use semicolon delimiters
    '@typescript-eslint/member-naming': 'off', // don't enforce conventions for member naming
    '@typescript-eslint/member-ordering': 'error', // enforce order of members by type / scope / etc.

    '@typescript-eslint/no-array-constructor': 'error', // disallow Array constructor
    '@typescript-eslint/no-empty-interface': 'error', // disallow empty interfaces
    '@typescript-eslint/no-explicit-any': 'off', // allow explicit use of any
    '@typescript-eslint/no-inferrable-types': 'error', // don't define type for primitive types since they're easily inferred
    '@typescript-eslint/no-namespace': 'error', // prefer es6 style modules to outdated module/namespace syntax
    '@typescript-eslint/no-non-null-assertion': 'off', // allow for foo.bar!.baz instead of foo.bar && foo.bar.baz
    '@typescript-eslint/no-parameter-properties': 'off', // allow param props like readonly and private
    '@typescript-eslint/no-type-alias': 'off', // aloow type aliases
    '@typescript-eslint/no-unused-vars': [ 'error', { ignoreRestSiblings: true } ], // no unused types / interfaces / etc.
    '@typescript-eslint/no-use-before-define': 'error', // no hoisting
    '@typescript-eslint/no-var-requires': 'error', // prefer es6 import

    '@typescript-eslint/prefer-namespace-keyword': 'off', // prefer es6 modules

    '@typescript-eslint/triple-slash-reference': [ 'error', { types: 'prefer-import' } ], // no longer needed due to es6 modules
    '@typescript-eslint/type-annotation-spacing': 'error', // consistent spacing around annotations
  },
};
