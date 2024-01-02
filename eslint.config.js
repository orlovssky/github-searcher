import stylisticPlugin from '@stylistic/eslint-plugin'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import arcaPlugin from 'eslint-plugin-arca'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

export default [
  {
    files: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.ts',
      '**/*.tsx'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptPlugin,
      arca: arcaPlugin,
      '@stylistic': stylisticPlugin
    },
    rules: {
      ...reactPlugin.configs['recommended'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs['recommended'].rules,
      ...typescriptPlugin.configs['recommended'].rules,

      /* Arca plugin */
      'arca/import-ordering': 'error',
      'arca/newline-after-import-section': 'error',

      /* React plugin */
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],

      /* General rules */
      '@stylistic/semi': [ 'error', 'never' ],
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/max-len': [ 'error', { code: 100, tabWidth: 4 }],
      '@stylistic/arrow-parens': 'error',
      '@stylistic/brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: false }
      ],
      '@stylistic/comma-dangle': 'error',
      '@stylistic/comma-style': 'error',
      '@stylistic/dot-location': 'error',
      '@stylistic/implicit-arrow-linebreak': 'error',
      '@stylistic/multiline-ternary': 'error',
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/no-extra-parens': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/operator-linebreak': 'error',
      '@stylistic/quote-props': [ 'error', 'as-needed' ],

      /* Empty line rules */
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0
        }
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'continue' },
        { blankLine: 'always', prev: '*', next: 'break' },
        { blankLine: 'always', prev: '*', next: 'case' },
        { blankLine: 'always', prev: '*', next: 'default' },
        { blankLine: 'always', prev: '*', next: 'throw' },
        { blankLine: 'always', prev: '*', next: 'debugger' }
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true },
          ObjectPattern: 'always',
          ImportDeclaration: { multiline: true, minProperties: 3 },
          ExportDeclaration: { multiline: true, minProperties: 3 }
        }
      ],
      '@stylistic/array-bracket-newline': [ 'error', { multiline: true, minItems: 3 }],
      // '@stylistic/array-element-newline': [ 'error', { multiline: true, minItems: 3 }],

      /* Whitespace rules */
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/array-bracket-spacing': [
        'error',
        'always',
        { objectsInArrays: false }
      ],
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': 'error',
      '@stylistic/type-named-tuple-spacing': 'error',
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': 'error',
      '@stylistic/comma-spacing': 'error',
      '@stylistic/rest-spread-spacing': 'error',
      '@stylistic/semi-spacing': 'error',
      '@stylistic/computed-property-spacing': 'error',
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/key-spacing': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': 'error',
      '@stylistic/space-in-parens': 'error',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/spaced-comment': 'error',
      '@stylistic/no-whitespace-before-property': 'error',

      /* JSX rules */
      '@stylistic/jsx-closing-bracket-location': 'error',
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-curly-brace-presence': [ 'error', 'never' ],
      '@stylistic/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          children: { when: 'never' }
        }
      ],
      '@stylistic/jsx-equals-spacing': 'error',
      '@stylistic/jsx-first-prop-new-line': 'error',
      '@stylistic/jsx-indent': [ 'error', 2 ],
      '@stylistic/jsx-max-props-per-line': [ 'error', { maximum: { single: 2, multi: 1 } }],
      '@stylistic/jsx-newline': 'error',
      '@stylistic/jsx-props-no-multi-spaces': 'error',
      '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: true,
          noSortAlphabetically: false
        }
      ],
      '@stylistic/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }
      ],
      '@stylistic/jsx-wrap-multilines': 'error'
    }
  }
]
