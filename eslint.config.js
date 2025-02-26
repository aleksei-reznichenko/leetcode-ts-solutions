// @ts-check

import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import jest from 'eslint-plugin-jest'

export default tseslint.config(
  {
    ignores: ['**/dist/'],
  },
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    },
  },
  // CREDIT: https://github.com/jest-community/eslint-plugin-jest
  // CREDIT: https://levelup.gitconnected.com/a-comprehensive-guide-to-setting-up-eslint-jest-and-prettier-in-node-typescript-b04d8e5673fd
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    plugins: { jest },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  }
)
