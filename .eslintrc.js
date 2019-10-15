module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-unescaped-entities': 0,
    'no-empty-pattern': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
