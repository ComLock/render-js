const path = require('path');


const WEBPACK_CONFIG = {
  entry: {
    'src/class/addContent': path.resolve(__dirname, 'src/class/addContent.es'),
    'src/class/build': path.resolve(__dirname, 'src/class/build.es'),
    'src/class/clone': path.resolve(__dirname, 'src/class/clone.es'),
    'src/class/element': path.resolve(__dirname, 'src/class/element.es'),
    'src/class/getAttribute': path.resolve(__dirname, 'src/class/getAttribute.es'),
    'src/class/getAttributes': path.resolve(__dirname, 'src/class/getAttributes.es'),
    'src/class/getContent': path.resolve(__dirname, 'src/class/getContent.es'),
    'src/class/getMedia': path.resolve(__dirname, 'src/class/getMedia.es'),
    'src/class/getStyle': path.resolve(__dirname, 'src/class/getStyle.es'),
    'src/class/render': path.resolve(__dirname, 'src/class/render.es'),
    'src/class/setAttribute': path.resolve(__dirname, 'src/class/setAttribute.es'),
    'src/class/setAttributes': path.resolve(__dirname, 'src/class/setAttributes.es'),
    'src/class/setContent': path.resolve(__dirname, 'src/class/setContent.es'),
    'src/class/setMedia': path.resolve(__dirname, 'src/class/setMedia.es'),
    'src/class/setStyle': path.resolve(__dirname, 'src/class/setStyle.es'),
    'src/class': path.resolve(__dirname, 'src/class.es'),

    'src/css/addDefaultUnit': path.resolve(__dirname, 'src/css/addDefaultUnit.es'),
    'src/css/objToStyleAttr': path.resolve(__dirname, 'src/css/objToStyleAttr.es'),
    'src/css/uniqCss': path.resolve(__dirname, 'src/css/uniqCss.es'),
    'src/css': path.resolve(__dirname, 'src/css.es'),

    'src/html/att2Str': path.resolve(__dirname, 'src/html/att2Str.es'),
    'src/html/elements': path.resolve(__dirname, 'src/html/elements.es'),
    'src/html/isVoid': path.resolve(__dirname, 'src/html/isVoid.es'),
    'src/html': path.resolve(__dirname, 'src/html.es'),

    'src/obj': path.resolve(__dirname, 'src/obj.es'),
    'src/svg': path.resolve(__dirname, 'src/svg.es'),

    'src/util/cloneObj': path.resolve(__dirname, 'src/util/cloneObj.es'),
    'src/util/dasherize': path.resolve(__dirname, 'src/util/dasherize.es'),
    'src/util/isArray': path.resolve(__dirname, 'src/util/isArray.es'),
    'src/util/isArrayOrFuncOrString': path.resolve(__dirname, 'src/util/isArrayOrFuncOrString.es'),
    'src/util/isArrayOrString': path.resolve(__dirname, 'src/util/isArrayOrString.es'),
    'src/util/isEmptyObject': path.resolve(__dirname, 'src/util/isEmptyObject.es'),
    'src/util/isFunction': path.resolve(__dirname, 'src/util/isFunction.es'),
    'src/util/isObject': path.resolve(__dirname, 'src/util/isObject.es'),
    'src/util/isSet': path.resolve(__dirname, 'src/util/isSet.es'),
    'src/util/isString': path.resolve(__dirname, 'src/util/isString.es'),
    'src/util/sortedUniqStr': path.resolve(__dirname, 'src/util/sortedUniqStr.es'),
    'src/util/toStr': path.resolve(__dirname, 'src/util/toStr.es'),
    'src/util': path.resolve(__dirname, 'src/util.es'),

    dom: path.resolve(__dirname, 'dom.es'),
    index: path.resolve(__dirname, 'index.js'),
    input: path.resolve(__dirname, 'input.js'),
    ncss: path.resolve(__dirname, 'ncss.es'),
    util: path.resolve(__dirname, 'util.es')
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
