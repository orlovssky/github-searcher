export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-clean-order'
  ],
  rules: { 'at-rule-no-unknown': [ true, { ignoreAtRules: [ 'mixin' ] }] }
}
