module.exports = {
  "extends": [
    "yuko",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "semi": "off",
    "@typescript-eslint/semi": "error",
  }
}