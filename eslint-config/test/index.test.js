/**
 * @file Tests for ESLint rules
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017-2018 Greylock Labs. See LICENSE file for details.
 */

import shell from 'shelljs';

const lint = (filename) => shell.exec(`eslint test/data/${filename}`, { silent: true }).code;

test('eslint config fails for improperly formatted javascript file', () => {
  expect(lint('bad.js')).toBe(1);
});

test('eslint config passes for properly formatted javascript file', () => {
  expect(lint('good.js')).toBe(0);
});

test('eslint config fails for improperly formatted tsx file', () => {
  expect(lint('bad.tsx')).toBe(1);
});

test('eslint config passes for properly formatted tsx file', () => {
  expect(lint('good.tsx')).toBe(0);
});
