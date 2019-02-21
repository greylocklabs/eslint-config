module.exports = {
  env: {
    es6: true,
  },
  rules: {
    'arrow-body-style': [ 'error', 'as-needed' ], // enforce consistent arrow body style
    'arrow-parens': [ 'error', 'always' ], // enforce use of () around arrow function arguments
    'arrow-spacing': 'error', // enforce consistent spacing around arrows

    'constructor-super': 'error', // validate super() usage inside constructor()

    'generator-star-spacing': [ // consistent spacing around generator function * symbol
      'error',
      {
        before: false,
        after: true,
      },
    ],

    'implicit-arrow-linebreak': 'off', // allow line break between the arrow and function body

    'no-class-assign': 'error', // disallow modifying variables of class declarations
    'no-confusing-arrow': [ 'error', { allowParens: true } ], // avoid arrow functions that look like comparisons unless using parentheses
    'no-const-assign': 'error', // no modifying constants
    'no-dupe-class-members': 'error', // disallow duplicate class members
    'no-duplicate-imports': 'off', // see ./plugins/import.js for similar rule
    'no-new-symbol': 'error', // disallow symbol constructor
    'no-restricted-imports': 'off', // disallow specific node modules from being imported
    'no-this-before-super': 'error', // disallow to use this/super before super() calling in constructors
    'no-useless-computed-key': 'error', // disallow useless computed property keys
    'no-useless-constructor': 'error', // disallow constructors that can be removed
    'no-useless-rename': 'error', // disallow renaming import, export, and destructured assignments to the same name
    'no-var': 'error', // prefer let and const to var

    'object-shorthand': [ 'error', 'always' ], // be consistent when using object shorthand syntax

    'prefer-arrow-callback': 'error', // always use arrow functions for callbacks
    'prefer-const': [ // prefer const over let when applicable
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [ // prefer object destructuring but not for arrays
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error', // in es6 binary, hex, and octal literals are preferred to parseInt()
    'prefer-rest-params': 'error', // prefer rest params (...args) instead of 'arguments' keyword
    'prefer-spread': 'error', // use spread operator over .apply()
    'prefer-template': 'error', // use template literals instead of string concatenation

    'require-yield': 'error', // generator functions must have yield
    'rest-spread-spacing': 'error', // prefer ...args to ... args

    'sort-imports': 'off', // don't enforce sorting import statements A-Z
    'symbol-description': 'error', // require symbol descriptions

    'template-curly-spacing': 'error', // no spaces between template variable and curly braces

    'yield-star-spacing': [ 'error', 'after' ], // enforce position of * in yield statements
  },
};
