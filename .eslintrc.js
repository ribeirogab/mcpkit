/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'tsup.config.js',
        'vitest.config.mjs',
        'vitest.workspace.mjs',
      ],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['./src/configs/env.config.ts', './src/container.ts'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            ...require('./prettier.config'),
            printWidth: 130,
          },
        ],
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...require('./prettier.config'),
      },
    ],
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    'no-useless-constructor': 'off',
  },
};
