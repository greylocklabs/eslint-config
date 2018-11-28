/**
 * @file Rules for eslint-plugin-react
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  plugins: [ 'react' ],
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
