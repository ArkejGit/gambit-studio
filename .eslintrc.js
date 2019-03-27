module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/html-indent": "off",
    "allowIndentationTabs": true,
    "no-tabs": 0,
    "indent": ["error", "tab"],
    "vue/attribute-hyphenation": "off",
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off"
  }
}
