/* eslint-disable arrow-body-style */
/* eslint-disable function-paren-newline */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-new-object */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable key-spacing */

import { el as htmlEl } from './index';
import { dasherize, isString, toStr } from './util.es';

// export { html, head } from './index';


const DEBUG = true;
const TRACE = false;

const CSS_PROP_ABBR = { // Abbreviation
  w: 'width',
  'w-ma': 'max-width',
  'w-mi': 'mix-width'
};

const TACHYONS = {
  display: {
    abbr: 'd',
    values: {
      b:     'block',
      d:     'initial',
      f:     'flex',
      // g:    'grid',
      i:     'inherit',
      in:    'inline',
      inb:   'inline-block',
      inf:   'inline-flex',
      int:   'inline-table',
      li:    'list-item',
      n:     'none',
      ri:    'run-in',
      t:     'table',
      tc:    'table-cell',
      tca:   'table-caption',
      tfg:   'table-footer-group',
      thg:   'table-header-group',
      tr:    'table-row',
      trg:   'table-row-group',
      tcol:  'table-column',
      tcolg: 'table-column-group'
    }
  },
  maxWidth: {
    abbr: 'w-ma'
  },
  minWidth: {
    abbr: 'w-mi'
  },
  width: {
    abbr: 'w'
  }
};

/*
function _media(name, rules) {
  return `@media (min-width: ${MEDIA_QUERIES[name].minWidth}) {${[].concat(rules).join('\n')}}`;
}
*/

// Since both spec and content may be of type Object we need some way to know which is which...
class Content {
  constructor({ html = '', tachyons = {} } = {}) {
    this.html = html;
    this.tachyons = tachyons;
  }
} // class Content
exports.Content = Content;

/*
const o = {};
const c = new Content({ html: '', tachyons: [] });
console.log(`o instanceof Content:${toStr(o instanceof Content)}`); // false
console.log(`c instanceof Content:${toStr(c instanceof Content)}`); // true
*/


function classAppendAndCssFromMedia(media) {
  DEBUG && console.log(`media:${toStr(media)}`);
  const classAppend = [];
  const css = [];
  Object.keys(media).forEach(mediaRuleKey => {
    const queries = [];
    const prefix = dasherize(mediaRuleKey);
    mediaRuleKey.split('_').forEach(mP => {
      DEBUG && console.log(`mP:${toStr(mP)}`);
      const match = /^(maxWidth|minWidth)(.*)$/.exec(mP);
      queries.push(`(${dasherize(match[1])}: ${match[2]})`);
    });
    Object.keys(media[mediaRuleKey]).forEach(prop => {
      const dashProp = dasherize(prop);
      //classAppend.push(`${prefix}-${dashProp}-`);
      // `${dashProp}: ${media[mediaRuleKey][property]}`
    });
    css.push(`@media ${queries.join(' AND ')} {}`);
  }); // forEach mediaRuleKey
  /*
    const parts = m.split('_').map(p => {
      const match = /^(max|min)Width(.*)$/.exec(p);
      classes.push(`${match[1] === max ? 'w-ma': 'w-mi'}-${match[2]}`);
    });
    // return `@media (${m.split('_').map(e => dasherize(e)).join(') and (')})`;
  }) // map
  */
  return {
    classAppend: 'jalla',
    css: []
  };
}


exports.el = (tag, spec = null, content = null) => {
  let classes = [];
  TRACE && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  TRACE && console.log(`spec instanceof Content:${spec instanceof Content}`);
  if (isString(spec) || spec instanceof Content) {
    content = spec;
    spec = {};
  }
  DEBUG && console.log(`tag:${toStr(tag)} spec:${toStr(spec)} content:${toStr(content)}`);
  let tachyons = content instanceof Content ? content.tachyons : []; // Assuming Content always has a tachyons property.
  if (spec && spec._media) {
    const { classAppend, css } = classAppendAndCssFromMedia(spec._media);
    classes = [].concat(classes, classAppend);
    tachyons = tachyons.concat(css);
    DEBUG && console.log(`tachyons:${toStr(tachyons)}`);
    spec._media = null; // Don't pass to htmlEl as attribute. NOTE this means cannot have attribute named _media
  }
  // const string = content instanceof Content ? content.html : content;
  return new Content({
    html: htmlEl(tag, spec, content instanceof Content ? content.html : content), // Allow content to be Content or string
    tachyons
  });
};


export default exports;
