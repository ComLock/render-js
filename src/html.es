import {HTML_AND_SVG_ELEMENTS} from './html/elements.es';


export {att2Str} from './html/att2Str.es';
export {cdata} from './html/cdata.es';
export {doctype} from './html/doctype.es';
export {el} from './html/el.es';
export {ELEMENTS} from './html/elements.es';
export {isVoid} from './html/isVoid.es';
export {render} from './html/render.es';

HTML_AND_SVG_ELEMENTS.forEach(k => {
  exports[k] = (...args) => exports.el(k, ...args);
});

export default exports;
