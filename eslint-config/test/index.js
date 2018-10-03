/**
 * @file Tests for ESLint rules
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
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

// eslint-disable-next-line jest/expect-expect
test('eslint config fails for improperly formatted .js file', (t) => {
  const report = t.context.cli.executeOnFiles([ 'data/bad.js' ]);

  t.is(report.errorCount, 14);
  t.is(report.warningCount, 0);
});

// eslint-disable-next-line jest/expect-expect
test('eslint config passes for properly formatted .js file', (t) => {
  const report = t.context.cli.executeOnFiles([ 'data/good.js' ]);

  t.is(report.errorCount, 0);
  t.is(report.warningCount, 0);
});
