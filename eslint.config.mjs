import { defineConfig } from 'eslint/config';
import nextConfig from 'eslint-config-next';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default defineConfig([
  {
    extends: [nextConfig, eslintConfigPrettier],
    ignores: ['*.js', 'next-env.d.ts'],
    plugins: {
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',

        ecmaFeatures: {
          jsx: true
        }
      }
    },

    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index'], 'type'],

          pathGroups: [
            {
              pattern: '{react*,react*/**}',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@public/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@api/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@store/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@utils/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@config/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@provider/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@components/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@lib/**',
              group: 'internal',
              position: 'after'
            }
          ],

          pathGroupsExcludedImportTypes: ['type'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },

          'newlines-between': 'always'
        }
      ],

      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'no-underscore-dangle': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'object-curly-newline': 'off',
      'linebreak-style': 'off',
      'no-param-reassign': 'off',
      'react/no-danger': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'no-alert': 'off',
      'import/no-unresolved': 'off',

      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: false,
          assignment: false
        }
      ],

      'max-params': ['error', 4],

      'max-lines': [
        'error',
        {
          max: 200,
          skipBlankLines: false,
          skipComments: false
        }
      ],

      'multiline-comment-style': 'error'
    }
  },
  {
    files: ['./src/api/**', './src/utils/**'],

    rules: {
      'max-lines': 'off',

      'max-lines-per-function': [
        'error',
        {
          max: 100
        }
      ]
    }
  },
  {
    files: ['./src/store/**'],

    rules: {
      'max-lines': 'off'
    }
  }
]);
