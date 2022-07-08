module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-unused-vars': 2,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'func-call-spacing': 'never',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react$', '^next', '^[a-z]'],
              ['^@'],
              ['^~'],
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
};
