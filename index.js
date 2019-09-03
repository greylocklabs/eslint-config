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
    './rules/plugins/vue',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  overrides: [
    {
      files: [ '*.ts', '*.tsx', '*.vue' ], // Apply TypeScript rules to these filetypes
      extends: [ './rules/plugins/typescript' ],
    },
  ],
};
