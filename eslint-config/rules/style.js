/**
 * @file Rules from the Stylistic Issues section: https://eslint.org/docs/rules/#stylistic-issues
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2019 Greylock Labs. See LICENSE file for details.
 */

const indentSize = 2;
const maxNestedCallbacks = 3;

module.exports = {
  rules: {
    'array-bracket-newline': 'off', // enforce newlines between opening and closing braces
    'array-bracket-spacing': [ 'error', 'always' ], // spaces between opening and closing braces and elements
    'array-element-newline': 'off', // enforce newlines between array elements

    'block-spacing': [ 'error', 'always' ], // enforce spacing in single line blocks
    'brace-style': [ 'error', '1tbs' ], // no newline for opening brace and no single-line blocks

    camelcase: [ 'error', { properties: 'never' } ], // enforce camelcase except for object properties
    'capitalized-comments': 'off', // don't enforce capitalization for first word of a comment
    'comma-dangle': [ 'error', 'always-multiline' ], // require dangling commas in multiline situations
    'comma-spacing': 'error', // enforce space after a comma and no space before it
    'comma-style': 'error', // comma comes at end of line
    'computed-property-spacing': [ 'error', 'never' ], // disallow padding inside computed properties
    'consistent-this': [ 'error', 'self' ], // use 'self' when capturing this

    'eol-last': 'error', // require newline at end of file

    'func-call-spacing': 'error', // no space between function and invocation
    'func-name-matching': 'error', // func name must match variable name
    'func-names': 'error', // functions must be named
    'func-style': [ // always use function expressions
      'error',
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    'function-paren-newline': 'error', // if newline inside function params, place newline between parentheses

    'id-blacklist': 'off', // no blacklist for variable or function names
    'id-length': 'off', // no min or max identifier length
    'id-match': 'off', // no regex for ID names
    indent: [ // 2 spaces for indent
      'error',
      indentSize,
      { SwitchCase: 1 },
    ],

    'jsx-quotes': 'error', // double quotes for JSX props, i.e. HTML

    'key-spacing': 'error', // space after colon and not before
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    'line-comment-position': 'off', // don't care about line comment position
    'linebreak-style': [ 'error', 'unix' ], // UNIX line breaks
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    'lines-between-class-members': 'error', // blank line after a class member

    'max-classes-per-file': 'off', // enforce a maximum number of classes per file
    'max-depth': 'off', // don't enforce a max nesting of blocks
    'max-len': [ // line length
      'warn',
      {
        code: 120,
        tabWidth: 4,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': 'off', // number of lines in file
    'max-lines-per-function': [ 'warn', { skipBlankLines: true, skipComments: true } ], // enforce a maximum function length
    'max-nested-callbacks': [ 'error', maxNestedCallbacks ], // number of nested callbacks
    'max-params': 'off', // don't enforce a max number of function parameters
    'max-statements': 'off', // don't enforce a max number of statements
    'max-statements-per-line': [ 'error', { max: 1 } ], // one statement per line
    'multiline-comment-style': [ 'error', 'starred-block' ], // consistent multiline comments
    'multiline-ternary': [ 'error', 'never' ], // no multiline ternary expressions

    'new-cap': 'error', // capital letter for constructors
    'new-parens': 'error', // require constructors to be called with parentheses
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 } ], // allow chained calls on one line up to 3 in a row
    'no-array-constructor': 'error', // disallow use of Array constructor
    'no-bitwise': 'off', // allow bitwise operators
    'no-continue': 'error', // no continue statement
    'no-inline-comments': 'off', // allow inline comments
    'no-lonely-if': 'error', // prefer else if to nested if
    'no-mixed-operators': 'error', // use parentheses when mixing binary operators
    'no-mixed-spaces-and-tabs': 'error', // don't mix spaces and tabs
    'no-multi-assign': 'error', // disallow multiple assignments in a line
    'no-multiple-empty-lines': [ // 1 blank line and 1 at end of file
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-negated-condition': 'off', // don't check for negated conditions in if-else blocks
    'no-nested-ternary': 'error', // disallow nested ternary statements for the sake of readability
    'no-new-object': 'error', // disallow use of Object constructor
    'no-plusplus': [ // disallow ++ and -- except at the end of for loops
      'error', { allowForLoopAfterthoughts: true },
    ],
    'no-restricted-syntax': 'off', // don't restrict any syntax
    'no-tabs': 'error', // no tabs allowed
    'no-ternary': 'off', // allow ternary operators
    'no-trailing-spaces': 'error', // disallow any trailing whitespace
    'no-underscore-dangle': 'error', // disallow underscores
    'no-unneeded-ternary': 'error', // disallow unnecessary ternary
    'no-whitespace-before-property': 'error', // disallow whitespace before properties
    'nonblock-statement-body-position': 'error', // enforce position of single line statements not in a block

    'object-curly-newline': [ // newline between braces if multiline object
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      },
    ],
    'object-curly-spacing': [ 'error', 'always' ], // spaces between curly braces and elements
    'object-property-newline': [ 'error', { allowMultiplePropertiesPerLine: true } ], // new lines between properties unless all on one line
    'one-var': [ 'error', 'never' ], // one variable declaration per line
    'one-var-declaration-per-line': [ 'error', 'always' ], // newline after variable declaration
    'operator-assignment': [ 'error', 'always' ], // require operator shorthand where possible
    'operator-linebreak': [ 'error', 'before' ], // if linebreak exists must be before next operand

    'padded-blocks': [ // disallow padding the code within a block
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],
    'padding-line-between-statements': 'off', // don't enforce rules for breaks between statements
    'prefer-object-spread': 'error', // prefer use of an object spread over Object.assign

    'quote-props': [ 'error', 'as-needed' ], // only quote object props if necessary
    quotes: [ 'error', 'single' ],

    'require-jsdoc': [ // do not require jsdoc annotations
      'off',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],

    semi: [ 'error', 'always' ], // always use semicolons
    'semi-spacing': [ // consistent semicolon spacing
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': [ 'error', 'last' ], // semicolons at end of line
    'sort-keys': 'off', // don't require object keys to be sorted
    'sort-vars': 'off', // don't require variables in same scope to be sorted
    'space-before-blocks': 'error', // put space before a block starts
    'space-before-function-paren': [ // always put a space between function and opening paren unless named
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [ 'error', 'never' ], // no spaces between parentheses
    'space-infix-ops': 'error', // require spaces around operators
    'space-unary-ops': [ // spacing around unary operators
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [ 'error', 'always' ], // spaces after comment begins
    'switch-colon-spacing': 'error', // consistent switch colon spacing

    'template-tag-spacing': [ 'error', 'never' ], // no spaces around template tags and their literals

    'unicode-bom': [ 'error', 'never' ], // disallow unicode BOM

    'wrap-regex': 'off', // don't require regex to be wrapped in parentheses
  },
};
