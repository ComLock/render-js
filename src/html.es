import {att2Str} from './html/att2Str.es';
import {cdata} from './html/cdata.es';
import {decodeHtmlEntity} from './html/decodeHtmlEntity.es';
import {doctype} from './html/doctype.es';
import {el, elFn} from './html/el.es';
import {encodeHtmlEntity} from './html/encodeHtmlEntity.es';
import {HTML_AND_SVG_ELEMENTS} from './html/elements.es';
import {isVoid} from './html/isVoid.es';
import {render} from './html/render.es';

/*
  A little weird way of exporting, but it works when:
  1. imported directly
  2. transpiled to dist
  3. webpacked to lib
*/

exports.att2Str = att2Str;
exports.cdata = cdata;
exports.decodeHtmlEntity = decodeHtmlEntity;
exports.doctype = doctype;
exports.el = el;
exports.encodeHtmlEntity = encodeHtmlEntity;
exports.isVoid = isVoid;
exports.render = render;

HTML_AND_SVG_ELEMENTS.forEach(t => {
  exports[t] = elFn(t);
});

//export default exports; // Not needed
