module.exports = {

  // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
  extends: 'airbnb',

  globals: {
    app: false,
    describe: false,
    it: false,
    Java: false,
    resolve: false,
    __: false
  },

  rules: {
    'arrow-parens': ['error', 'as-needed'],

    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],

    'import/no-extraneous-dependencies': ['off'],

    'no-underscore-dangle': ['error', {
      allow: [
        '_a',
        '_c',
        '_m',
        '_p',
        '_s',
        '_t'
      ],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false
    }],

    'object-curly-spacing': ['off'],
    'spaced-comment': ['off']
  } // rules
};
