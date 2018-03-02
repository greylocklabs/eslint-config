/**
 * @file Rules for eslint-plugin-vue
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: [ 'vue' ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'vue/comment-directive': 'error', // support eslint-disable-* and eslint-enable-* comments in <template>
        'vue/jsx-uses-vars': 'error', // don't mark variables used in JSX as unused in script tag

        'vue/no-async-in-computed-properties': 'error', // computed properties should be synchronous
        'vue/no-dupe-keys': 'error', // disallow duplication of field names
        'vue/no-duplicate-attributes': 'error', // disallow duplication of attributes
        'vue/no-parsing-error': 'error', // disallow parsing errors in <template>
        'vue/no-reserved-keys': 'error', // disallow overwriting reserved keys
        'vue/no-shared-component-data': 'error', // enforce component's data property to be a function
        'vue/no-side-effects-in-computed-properties': 'error', // disallow side effects in computed properties
        'vue/no-template-key': 'error', // disallow key attribute on <template>
        'vue/no-textarea-mustache': 'error', // disallow mustaches in <textarea>
        'vue/no-unused-vars': 'error', // disallow unused variable definitions of v-for directives or scope attributes
        'vue/require-component-is': 'error', // require v-bind:is of <component> elements
        'vue/require-render-return': 'error', // enforce render function to always return value
        'vue/require-v-for-key': 'error', // require v-bind:key with v-for directives
        'vue/require-valid-default-prop': 'error', // enforce props default values to be valid
        'vue/return-in-computed-property': 'error', // enforce that a return statement is present in computed property
        'vue/valid-template-root': 'error', // enforce valid template root
        'vue/valid-v-bind': 'error', // enforce valid v-bind directives
        'vue/valid-v-cloak': 'error', // enforce valid v-cloak directives
        'vue/valid-v-else-if': 'error', // enforce valid v-else-if directives
        'vue/valid-v-else': 'error', // enforce valid v-else directives
        'vue/valid-v-for': 'error', // enforce valid v-for directives
        'vue/valid-v-html': 'error', // enforce valid v-html directives
        'vue/valid-v-if': 'error', // enforce valid v-if directives
        'vue/valid-v-model': 'error', // enforce valid v-model directives
        'vue/valid-v-on': 'error', // enforce valid v-on directives
        'vue/valid-v-once': 'error', // enforce valid v-once directives
        'vue/valid-v-pre': 'error', // enforce valid v-pre directives
        'vue/valid-v-show': 'error', // enforce valid v-show directives
        'vue/valid-v-text': 'error', // enforce valid v-text directives

        'vue/attribute-hyphenation': 'error', // enforce attribute naming style in template
        'vue/html-end-tags': 'error', // enforce end tag style
        'vue/html-indent': [ 'error', 4 ], // consistent indentation in <template>, 4 spaces
        'vue/html-self-closing': 'off', // don't enforce self-closing tags
        'vue/max-attributes-per-line': 'off', // don't enforce max attributes per line
        'vue/mustache-interpolation-spacing': 'error', // enforce unified spacing in mustache interpolations
        'vue/name-property-casing': [ 'error', 'kebab-case' ], // enforce kebab-casing for the name property in Vue components
        'vue/no-multi-spaces': 'error', // disallow multiple spaces
        'vue/require-default-prop': 'error', // require default value for props
        'vue/require-prop-types': 'error', // require type definitions in props
        'vue/v-bind-style': 'error', // enforce v-bind directive style
        'vue/v-on-style': 'error', // enforce v-on directive style

        'vue/attributes-order': 'error', // enforce order of attributes
        'vue/html-quotes': 'error', // enforce quotes style of HTML attributes
        'vue/no-confusing-v-for-v-if': 'error', // disallow confusing v-for and v-if on the same element
        'vue/order-in-components': 'off', // don't care about component key order
        'vue/this-in-template': 'error', // enforce usage of this in template

        'vue/html-closing-bracket-newline': 'error', // closing bracket on same line as tag name
        'vue/html-closing-bracket-spacing': 'error', // no spaces between tag name and bracket unless self-closing end
        'vue/prop-name-casing': 'error', // enforce proper casing of props in vue components (camelCase)
        'vue/script-indent': 'off', // let normal eslint handle this
    },
};
