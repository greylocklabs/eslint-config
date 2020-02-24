module.exports = {
  plugins: [ 'jest' ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
  },
  rules: {
    'jest/consistent-test-it': 'error', // enforce consistent test or it keyword

    'jest/expect-expect': 'error', // enforce assertion to be made in a test body

    'jest/lowercase-name': 'error', // disallow capitalized test names

    'jest/no-alias-methods': 'error', // don't use alias methods
    'jest/no-disabled-tests': 'warn', // disallow disabled tests
    'jest/no-focused-tests': 'warn', // disallow focused tests
    'jest/no-hooks': 'off', // disallow setup and teardown hooks
    'jest/no-identical-title': 'error', // disallow identical titles
    'jest/no-jasmine-globals': 'error', // disallow jasmine globals
    'jest/no-jest-import': 'error', // disallow importing jest
    'jest/no-large-snapshots': 'off', // disallow large snapshots
    'jest/no-test-callback': 'error', // no using callback in async tests
    'jest/no-test-prefixes': 'error', // disallow using f & x prefixes to define focused/skipped tests
    'jest/no-test-return-statement': 'error', // disallow explicitly returning from tests
    'jest/no-truthy-falsy': 'off', // allow using toBeTruthy and toBeFalsy

    'jest/prefer-expect-assertions': 'off', // suggest using expect.assertions() OR expect.hasAssertions()
    'jest/prefer-inline-snapshots': 'off', // suggest using inline snapshots
    'jest/prefer-spy-on': 'off', // don't suggest using jest.spyOn()
    'jest/prefer-strict-equal': 'error', // suggest using toStrictEqual()
    'jest/prefer-to-be-null': 'error', // suggest using toBeNull()
    'jest/prefer-to-be-undefined': 'error', // suggest using toBeUndefined()
    'jest/prefer-to-contain': 'error', // suggest using toContain()
    'jest/prefer-to-have-length': 'error', // suggest using toHaveLength()
    'jest/prefer-todo': 'error', // prefer test.todo to skip and empty test

    'jest/require-to-throw-message': 'error', // require a message for toThrow()
    'jest/require-top-level-describe': 'error', // require a top-level describe block

    'jest/valid-describe': 'warn', // enforce valid describe() callback
    'jest/valid-expect-in-promise': 'error', // enforce having return statement when testing with promises
    'jest/valid-expect': 'error', // enforce valid expect() usage
    'jest/valid-title': 'error', // describe/test titles should be valid
  },
};
