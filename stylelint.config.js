module.exports = {
  ignoreFiles: ['.nuxt/**/*.*', 'node_modules/**/*.*', 'dist/**/*.*'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-sass-guidelines'
  ],
  plugins: ['stylelint-order', 'stylelint-color-format'],
  rules: {
    'color-format/format': {
      format: 'hsl'
    },
    'max-nesting-depth': null,
    'declaration-bang-space-before': null,
    'selector-max-compound-selectors': null,
    'no-descending-specificity': null,
    'string-quotes': null,
    'function-parentheses-space-inside': null
  }
}
