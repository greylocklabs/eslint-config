/**
 * @file Rules for eslint-plugin-ava
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    env: {
        es6: true,
    },
    plugins: [ 'ava' ],
    rules: {
        'ava/assertion-arguments': 'error', // enforce passing correct arguments to assertions
        'ava/max-asserts': 'off', // limit the number of assertions in a test
        'ava/no-async-fn-without-await': 'error', // ensure that async tests use await
        'ava/no-cb-test': 'off', // ensure no test.cb() is used
        'ava/no-duplicate-modifiers': 'error', // ensure tests do not have duplicate modifiers
        'ava/no-identical-title': 'error', // ensure no tests have the same title
        'ava/no-ignored-test-files': 'error', // ensure no tests are written in ignored files
        'ava/no-invalid-end': 'error', // ensure t.end() is only called inside test.cb()
        'ava/no-nested-tests': 'error', // ensure no tests are nested
        'ava/no-only-test': 'error', // ensure no test.only() are present
        'ava/no-skip-assert': 'error', // ensure no assertions are skipped
        'ava/no-skip-test': 'error', // ensure no tests are skipped
        'ava/no-statement-after-end': 'error', // ensure t.end() is the last statement executed
        'ava/no-todo-implementation': 'error', // ensure test.todo() is not given an implementation function
        'ava/no-todo-test': 'warn', // ensure no test.todo() is used
        'ava/no-unknown-modifiers': 'error', // prevent the use of unknown test modifiers
        'ava/prefer-async-await': 'error', // prefer using async/await instead of returning a Promise
        'ava/prefer-power-assert': 'off', // allow only use of the asserts that have no power-assert alternative
        'ava/test-ended': 'error', // ensure callback tests are explicitly ended
        'ava/test-title': [ 'error', 'if-multiple' ], // ensure tests have a title
        'ava/use-t-well': 'error', // prevent the incorrect use of t
        'ava/use-t': 'error', // ensure test functions use t as their parameter
        'ava/use-test': 'error', // ensure that AVA is imported with test as the variable name
        'ava/use-true-false': 'error', // ensure that t.true()/t.false() are used instead of t.truthy()/t.falsy()
    },
};
