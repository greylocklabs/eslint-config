const shell = require('shelljs'); // eslint-disable-line @typescript-eslint/no-var-requires

const latestReactVersion = shell.exec('npm show react version', { silent: true });
let reactInstalled;

try {
  require.resolve('react');
  reactInstalled = true;
} catch {
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
