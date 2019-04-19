module.exports = {
  parser: 'vue-eslint-parser',
  plugins: [ 'vue' ],
  extends: [ 'plugin:vue/recommended', '@vue/typescript' ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
