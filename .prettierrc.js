module.exports = {
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: 'packages/@ImageTestVarLang/angular/**',
      options: {
        semi: true,
      },
    },
  ],
}
