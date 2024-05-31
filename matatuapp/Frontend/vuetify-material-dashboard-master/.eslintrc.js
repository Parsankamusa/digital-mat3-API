module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // Ensures recognition of browser globals
  },
  extends: [
    'plugin:vue/recommended', // Use the Vue 2 recommended configuration
    // If you're using Vuetify and have the Vuetify ESLint plugin, uncomment the next line.
    // 'plugin:vuetify/recommended', // Uncomment if applicable
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // Recommended parser for projects using Babel
    ecmaVersion: 2020, // Specify ECMAScript version
    sourceType: 'module', // Indicates that the code uses ES modules
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  plugins: [
    'vue', // Adds Vue-specific linting rules
  ],
};
