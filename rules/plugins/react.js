const shell = require('shelljs');

const latestReactVersion = shell.exec('npm show react version', { silent: true }).stdout.replace('\n', '');
let reactInstalled;

try {
  require.resolve('react');
  reactInstalled = true;
} catch (e) {
  reactInstalled = false;
}

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
      version: reactInstalled ? 'detect' : latestReactVersion,
    },
  },
  extends: [ 'plugin:react/recommended' ],
};
