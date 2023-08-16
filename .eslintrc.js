module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    "no-mixed-spaces-and-tabs":'off',
    "vue/multi-word-component-names":'off',
    "lintOnSave":'off',
    "generator-star-spacing": "off",
    "no-tabs": "off",
    "no-irregular-whitespace": "off"
  }
}
