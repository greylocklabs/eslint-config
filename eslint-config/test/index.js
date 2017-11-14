/**
 * @file Tests for ESLint rules
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

import test from 'ava';
import { CLIEngine } from 'eslint';

test.beforeEach((t) => {
    t.context.cli = new CLIEngine({
        configFile: './index.js',
        useEslintrc: true,
        cwd: __dirname,
    });
});

test('ESLint config fails for improperly formatted file', (t) => {
    const report = t.context.cli.executeOnFiles([ 'data/bad.js' ]);
    const numErrors = 15;
    const numWarnings = 1;

    t.is(report.errorCount, numErrors);
    t.is(report.warningCount, numWarnings);
});

test('ESLint config passes for properly formatted file', (t) => {
    const report = t.context.cli.executeOnFiles([ 'data/good.js' ]);

    t.is(report.errorCount, 0);
    t.is(report.warningCount, 0);
});
