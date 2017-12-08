const path = require('path');


const WEBPACK_CONFIG = {
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    input: path.resolve(__dirname, 'input.js')
  },
  devtool: false, // Don't waste time generating sourceMaps
  module: {
    rules: [{
      test: /\.(es6|js)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false, // The .babelrc file should only be used to transpile *.babel.js files.
          comments: false,
          compact: false,
          minified: false,
          plugins: [
            'array-includes',
            'transform-object-rest-spread'
          ],
          presets: ['env']
        } // options
      }] // use
    }] // rules
  }, // module
  output: {
    path: path.join(__dirname, './build/resources/main/lib/render-js/'), // Must be absolute in webpack3
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  stats: {
    colors: true,
    hash: false,
    maxModules: 0,
    modules: false,
    moduleTrace: false,
    timings: false,
    version: false
  }
};

export { WEBPACK_CONFIG as default };
