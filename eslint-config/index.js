/**
 * @file Main ESLint config file
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/nodejs',
    './rules/strict-mode',
    './rules/style',
    './rules/variables',

    './rules/plugins/import',
    './rules/plugins/jest',
    './rules/plugins/promise',
    './rules/plugins/react',
    './rules/plugins/security',
    './rules/plugins/typescript',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
};
