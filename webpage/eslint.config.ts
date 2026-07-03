import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig(
  {
    ignores: ['node_modules/', 'coverage/', 'dist/', 'env.d.ts'],
  },

  // 1. Base JS recommended rules
  js.configs.recommended,

  // import plugin default rules
  importPlugin.flatConfigs.recommended,

  // 2. TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 3. React hooks recommended rules
  reactHooks.configs.flat.recommended,

  {
    // Apply these settings to your source files
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // Includes window, document, etc. automatically
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      // Plug-in recommended maps (Flat config requires manual mapping for some legacy plugins)
      ...reactPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Turn off base 'no-unused-vars' rule as the below
      //  typescript rule performs the same function:
      // ensures that any unused variable triggers an error.
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],

      // Disable 'react/react-in-jsx-scope' rule so that
      //  ESlint will not enforce the import of React in files
      //  with JSX (ie, import React from 'react'). Since
      // React 17, this import has not been required.
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 3. Prettier (always last to override style rules)
  eslintConfigPrettier,
);
