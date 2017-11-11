/**
 * @file Rules from the Node.js and CommonJS section: https://eslint.org/docs/rules/#nodejs-and-commonjs
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

module.exports = {
    env: {
        node: true,
    },
    rules: {
        'callback-return': 'off', // require return after a callback

        'global-require': 'error', // all require() statements should be top-level in file

        'handle-callback-err': 'error', // always handle callback error (first argument to callback in node)

        'no-buffer-constructor': 'error', // disallow use of Buffer() constructor
        'no-mixed-requires': 'error', // don't mix require() with other statements when declaring variables together
        'no-new-require': 'error', // no new require()
        'no-path-concat': 'error', // disallow string concatenation with __dirname and __filename
        'no-process-env': 'off', // allow process.env
        'no-process-exit': 'off', // allow process.exit
        'no-restricted-modules': 'off', // don't restrict any node modules
        'no-sync': [ 'error', { allowAtRootLevel: true } ], // disallow sync builtin methods except at root level
    },
};
