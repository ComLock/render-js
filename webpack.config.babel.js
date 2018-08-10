/* eslint-disable max-len */
const path = require('path');

const entry = {
  class: path.resolve(__dirname, 'src/class.es'),
  dom: path.resolve(__dirname, 'dom.es'),
  html: path.resolve(__dirname, 'src/html.es'),
  //'html/input': path.resolve(__dirname, 'src/html/input.es'), // Don't feel like this belongs in dist either.
  ncss: path.resolve(__dirname, 'ncss.es'),
  obj: path.resolve(__dirname, 'src/obj.es'),
  //svg: path.resolve(__dirname, 'src/svg.es'), // Not needed in dist
  util: path.resolve(__dirname, 'src/util.es') // Might not belong in dist, but could be useful.
};

const devtool = 'source-map'; // sourceMaps might be useful in browser

const mode = 'production';

const stats = {
  colors: true,
  hash: false,
  maxModules: 0,
  modules: false,
  moduleTrace: false,
  timings: false,
  version: false
};


const DIST_CONFIG = {
  entry,
  devtool,
  mode,
  module: {
    rules: [{
      test: /\.(es6?|js)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false, // The .babelrc file should only be used to transpile *.babel.js files.
          comments: false,
          compact: true,
          minified: true,
          plugins: [
            'array-includes',
            'optimize-starts-with',
            'transform-object-assign',
            'transform-object-rest-spread'
          ],
          presets: ['env']
        } // options
      }] // use
    }] // rules
  }, // module
  output: {
    path: path.join(__dirname, './dist/'), // Must be absolute in webpack3
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  stats
}; // DIST_CONFIG


const LIB_CONFIG = {
  entry,
  devtool,
  mode,
  module: {
    rules: [{
      test: /\.(es6?|js)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false, // The .babelrc file should only be used to transpile *.babel.js files.
          comments: false,
          compact: true,
          minified: true,

          plugins: [
            //'array-includes', // TODO does modern browsers support this?
            //'optimize-starts-with', // TODO does modern browsers support this?

            // Does browsers implement support for module loading?
            // https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
            // If not do this:
            //'transform-es2015-modules-commonjs',

            //'transform-object-assign', // TODO does modern browsers support this?
            'transform-object-rest-spread' // or webpack will fail
          ],

          presets: [] // No preset since we want ECMAScript 2015
        } // options
      }] // use
    }] // rules
  }, // module
  output: {
    path: path.join(__dirname, './lib/'), // Must be absolute in webpack3
    filename: '[name].js'//,
    //libraryTarget: 'commonjs'
  },
  stats
}; // LIB_CONFIG


const ENONIC_CONFIG = {
  entry: {
    class: path.resolve(__dirname, 'src/class.es'),
    css: path.resolve(__dirname, 'src/css.es'),
    html: path.resolve(__dirname, 'src/html.es'),
    obj: path.resolve(__dirname, 'src/obj.es'),
    //svg: path.resolve(__dirname, 'src/svg.es'),
    util: path.resolve(__dirname, 'src/util.es'),
    dom: path.resolve(__dirname, 'dom.es'),
    index: path.resolve(__dirname, 'html.es'),
    //input: path.resolve(__dirname, 'input.js'),
    ncss: path.resolve(__dirname, 'ncss.es')
  },
  devtool: false, // Don't waste time generating sourceMaps for Enonic server-side
  mode,
  module: {
    rules: [{
      test: /\.(es6?|js)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false, // The .babelrc file should only be used to transpile *.babel.js files.
          comments: false,
          compact: false,
          minified: false,
          plugins: [
            'array-includes',
            'optimize-starts-with',
            'transform-object-assign',
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
  stats
}; // ENONIC_CONFIG


const WEBPACK_CONFIG = [
  DIST_CONFIG,
  LIB_CONFIG,
  ENONIC_CONFIG
];


export { WEBPACK_CONFIG as default };
