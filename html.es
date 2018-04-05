import {HTML_AND_SVG_ELEMENTS} from './src/html/elements.es';


export {cdata} from './src/html/cdata.es';
export {doctype} from './src/html/doctype.es';
export {el} from './src/html/el.es';
export {render} from './src/html/render.es';

HTML_AND_SVG_ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});

export default exports;
