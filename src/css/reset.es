import merge from 'deepmerge';


const RESET_STYLE = {
  border: 0,
  font: 'inherit',
  fontSize: '100%',
  margin: 0,
  padding: 0,
  verticalAlign: 'baseline'
};

const RESET_DISPLAY = {
  display: 'block'
};

const RESET_LINE_HEIGHT = {
  lineHeight: '1'
};

const RESET_LIST_STYLE = {
  listStyle: 'none'
};

const RESET_QUOTES = {
  quotes: 'none'
};

/*const RESET_CONTENT = {
  //content: '',
  content: 'none'
};*/

const RESET_TABLE = {
  borderCollapse: 'collapse',
  borderSpacing: 0
};

const RESET_ELEMENTS = [
  'html', 'body', 'div', 'span', 'applet', 'object', 'iframe',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre',
  'a', 'abbr', 'acronym', 'address', 'big', 'cite', 'code',
  'del', 'dfn', 'em', 'img', 'ins', 'kbd', 'q', 's', 'samp',
  'small', 'strike', 'strong', 'sub', 'sup', 'tt', 'var',
  'b', 'u', 'i', 'center',
  'dl', 'dt', 'dd', 'ol', 'ul', 'li',
  'fieldset', 'form', 'label', 'legend',
  'table', 'caption', 'tbody', 'tfoot', 'thead', 'tr', 'th', 'td',
  'article', 'aside', 'canvas', 'details', 'embed',
  'figure', 'figcaption', 'footer', 'header', 'hgroup',
  'menu', 'nav', 'output', 'ruby', 'section', 'summary',
  'time', 'mark', 'audio', 'video'
];

const RESET_DISPLAY_ELEMENTS = [
  'article', 'aside', 'details', 'figcaption', 'figure',
  'footer', 'header', 'hgroup', 'menu', 'nav', 'section'
];

const RESET_LIST_STYLE_ELEMENTS = [
  'ol', 'ul'
];

const RESET_QUOTES_ELEMENTS = [
  'blockquote', 'q'
];

const RESET_OBJECT = {};

RESET_ELEMENTS.forEach(tag => {
  RESET_OBJECT[tag] = RESET_STYLE;
});

RESET_DISPLAY_ELEMENTS.forEach(tag => {
  RESET_OBJECT[tag] = merge(RESET_OBJECT[tag], RESET_DISPLAY);
});

RESET_OBJECT.body = merge(RESET_OBJECT.body, RESET_LINE_HEIGHT);

RESET_LIST_STYLE_ELEMENTS.forEach(tag => {
  RESET_OBJECT[tag] = merge(RESET_OBJECT[tag], RESET_LIST_STYLE);
});

RESET_QUOTES_ELEMENTS.forEach(tag => {
  RESET_OBJECT[tag] = merge(RESET_OBJECT[tag], RESET_QUOTES);
});

RESET_OBJECT.table = merge(RESET_OBJECT.table, RESET_TABLE);


/*
  A little weird way of exporting, but it works when:
  1. imported directly
  2. transpiled to dist
  3. webpacked to lib
*/
exports.RESET_ELEMENTS = RESET_ELEMENTS;
exports.RESET_OBJECT = RESET_OBJECT;
exports.RESET_STYLE = RESET_STYLE;

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*/
