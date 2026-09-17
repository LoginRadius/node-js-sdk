// ESLint 9 flat config.
//
// Replaces .eslintrc.json: ESLint 8 reached end-of-life in October 2024 and
// flat config is the only format v9+ reads. The rule set is carried over
// unchanged — this is a format migration, not a policy change.

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Generated output and vendored code are never linted: the generator owns
    // their style, and lint failures there are not actionable here.
    ignores: ['dist/', 'node_modules/', 'src/_generated/', 'examples/', 'demo/', 'demo-esm/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Node globals, declared explicitly rather than pulling in the
        // `globals` package for four names.
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
);
