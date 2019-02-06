/**
 * @file Rules for eslint-plugin-security
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2019 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
  plugins: [ 'security' ],
  rules: {
    'security/detect-buffer-noassert': 'warn', // for rationale behind all rules, see https://github.com/nodesecurity/eslint-plugin-security
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'warn',
    'security/detect-eval-with-expression': 'warn',
    'security/detect-new-buffer': 'warn',
    'security/detect-no-csrf-before-method-override': 'warn',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'warn',
    'security/detect-unsafe-regex': 'warn',
  },
};
