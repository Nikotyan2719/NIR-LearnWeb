import withNuxt from "./.nuxt/eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin";

export default withNuxt({

  "plugins": {
    "@stylistic": stylistic,
  },
  "rules": {
    ...stylistic.configs["all"].rules,
    "no-console": "error",
    "vue/no-v-html": "off",
    "vue/no-template-shadow": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "linebreak-style": [
      "error",
      "unix",
    ],
    "@stylistic/max-len": [
      "error",
      {
        "code": 480,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
      },
    ],
    "@stylistic/eol-last": [
      "error",
      "always",
    ],
    "@stylistic/quotes": [
      "error",
      "double",
    ],
    "@stylistic/indent": [
      "error",
      2,
    ],
    "@stylistic/semi": [
      "error",
      "always",
    ],
    "@stylistic/arrow-parens": [
      "error",
      "always",
    ],
    "@stylistic/comma-dangle": [
      "error",
      "always-multiline",
    ],
    "@stylistic/block-spacing": [
      "error",
      "always",
    ],
  },
});
