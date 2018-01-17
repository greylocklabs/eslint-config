/**
 * @file Rules from the Strict Mode section: https://eslint.org/docs/rules/#strict-mode
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

module.exports = { // babel takes care of strict mode
    rules: {
        strict: [ 'error', 'never' ],
    },
};
