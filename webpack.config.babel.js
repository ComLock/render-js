const path = require('path');

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
  entry: {
    class: path.resolve(__dirname, 'src/class.es'),
    dom: path.resolve(__dirname, 'dom.es'),
    html: path.resolve(__dirname, 'src/html.es'),
    'html/input': path.resolve(__dirname, 'src/html/input.es'),
    ncss: path.resolve(__dirname, 'ncss.es'),
    obj: path.resolve(__dirname, 'src/obj.es'),
    svg: path.resolve(__dirname, 'src/svg.es'),
    util: path.resolve(__dirname, 'src/util.es')
  },
  devtool: 'source-map', // sourceMaps might be useful in browser
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


const ENONIC_CONFIG = {
  entry: {
    'class/addClass': path.resolve(__dirname, 'src/class/addClass.es'),
    'class/addContent': path.resolve(__dirname, 'src/class/addContent.es'),
    'class/build': path.resolve(__dirname, 'src/class/build.es'),
    'class/clone': path.resolve(__dirname, 'src/class/clone.es'),
    'class/domPath': path.resolve(__dirname, 'src/class/domPath.es'),
    'class/element': path.resolve(__dirname, 'src/class/element.es'),
    'class/getAttribute': path.resolve(__dirname, 'src/class/getAttribute.es'),
    'class/getAttributes': path.resolve(__dirname, 'src/class/getAttributes.es'),
    'class/getContent': path.resolve(__dirname, 'src/class/getContent.es'),
    'class/getMedia': path.resolve(__dirname, 'src/class/getMedia.es'),
    'class/getStyle': path.resolve(__dirname, 'src/class/getStyle.es'),
    'class/render': path.resolve(__dirname, 'src/class/render.es'),
    'class/setAttribute': path.resolve(__dirname, 'src/class/setAttribute.es'),
    'class/setAttributes': path.resolve(__dirname, 'src/class/setAttributes.es'),
    'class/setContent': path.resolve(__dirname, 'src/class/setContent.es'),
    'class/setMedia': path.resolve(__dirname, 'src/class/setMedia.es'),
    'class/setStyle': path.resolve(__dirname, 'src/class/setStyle.es'),
    class: path.resolve(__dirname, 'src/class.es'),

    'css/addDefaultUnit': path.resolve(__dirname, 'src/css/addDefaultUnit.es'),
    'css/objToStyleAttr': path.resolve(__dirname, 'src/css/objToStyleAttr.es'),
    'css/uniqCss': path.resolve(__dirname, 'src/css/uniqCss.es'),
    css: path.resolve(__dirname, 'src/css.es'),

    'html/att2Str': path.resolve(__dirname, 'src/html/att2Str.es'),
    'html/elements': path.resolve(__dirname, 'src/html/elements.es'),
    'html/isVoid': path.resolve(__dirname, 'src/html/isVoid.es'),
    html: path.resolve(__dirname, 'src/html.es'),

    obj: path.resolve(__dirname, 'src/obj.es'),
    svg: path.resolve(__dirname, 'src/svg.es'),

    'util/cloneObj': path.resolve(__dirname, 'src/util/cloneObj.es'),
    'util/dasherize': path.resolve(__dirname, 'src/util/dasherize.es'),
    'util/isArray': path.resolve(__dirname, 'src/util/isArray.es'),
    'util/isArrayOrFuncOrString': path.resolve(__dirname, 'src/util/isArrayOrFuncOrString.es'),
    'util/isArrayOrString': path.resolve(__dirname, 'src/util/isArrayOrString.es'),
    'util/isEmptyObject': path.resolve(__dirname, 'src/util/isEmptyObject.es'),
    'util/isFunction': path.resolve(__dirname, 'src/util/isFunction.es'),
    'util/isObject': path.resolve(__dirname, 'src/util/isObject.es'),
    'util/isSet': path.resolve(__dirname, 'src/util/isSet.es'),
    'util/isString': path.resolve(__dirname, 'src/util/isString.es'),
    'util/sortedUniqStr': path.resolve(__dirname, 'src/util/sortedUniqStr.es'),
    'util/sortAndRemoveDups': path.resolve(__dirname, 'src/util/sortAndRemoveDups.es'),
    'util/toStr': path.resolve(__dirname, 'src/util/toStr.es'),
    util: path.resolve(__dirname, 'src/util.es'), // TODO conflict

    dom: path.resolve(__dirname, 'dom.es'),
    index: path.resolve(__dirname, 'index.js'),
    input: path.resolve(__dirname, 'input.js'),
    ncss: path.resolve(__dirname, 'ncss.es')
  },
  devtool: false, // Don't waste time generating sourceMaps
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
  ENONIC_CONFIG
];

export { WEBPACK_CONFIG as default };
