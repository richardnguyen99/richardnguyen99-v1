module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    'import/export': 'error',
    'import/prefer-default-export': 'error', // Allow single Named-export
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',

    /**
     * @description rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx']
      }
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error',

    /**
     * @description rules of eslint-plugin-prettier
     */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        strict: 'off'
      }
    }
  ]
}
