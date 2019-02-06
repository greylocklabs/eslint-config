/**
 * @file Rules for eslint-plugin-react
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2019 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  plugins: [ 'react' ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '16.6',
    },
  },
  extends: [ 'plugin:react/recommended' ],
};
