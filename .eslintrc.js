module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
    // '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'none',
        jsxBracketSameLine: false
      }
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-else-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 0,
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'max-len': ['error', { code: 140 }],
    'no-restricted-syntax': 0,
    'default-case': 0,
    'consistent-return': 0,
    'import/no-dynamic-require': 0,
    'no-mixed-operators': 0,
    'import/no-cycle': 0,
    'object-curly-newline': 0,
    '@typescript-eslint/no-non-null-assertion': 0
  }
}
