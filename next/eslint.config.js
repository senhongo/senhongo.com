// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import typescriptParser from '@typescript-eslint/parser';

export default tseslint.config(
  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
