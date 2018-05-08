/* eslint-disable max-len */
import {
  CSS_PSEUDO_SELECTORS_TO_ABBR,
  CSS_SELECTORS_TO_ABBR
} from './selectors.es';

import {dashPropToAbbrClassName} from './dashPropToAbbrClassName.es';
import {valueDashPropToAbbrClassName} from './valueDashPropToAbbrClassName.es';
import {addDefaultUnit} from './addDefaultUnit.es';

import {dasherize} from '../util/dasherize.es';
import {isSet} from '../util/isSet.es';


function handleProp({
  valueDashPropToAbbrClassNameFn,
  dashPropToAbbrClassNameFn,
  addDefaultUnitFn,
  prop,
  value,
  classAppend = [],
  css = [],
  prefix = '',
  postfix = '',
  pseudoPostfix = ''
} = {}) {
  const dashProp = dasherize(prop);
  /*console.log(`handleProp(${toStr({
    prop, value, classAppend, css, prefix, postfix, pseudoPostfix
  })})`);*/
  const propAbbr = dashPropToAbbrClassNameFn(dashProp);
  /* if (WARN && !CSS_PROP_TO_ABBR[dashProp]) {
    console.warn(`WARN: Couldn't find abbreviation for property:${prop} falling back to toClassName on property:${propAbbr}`);
  } */
  let lastValue = value;
  value = addDefaultUnitFn(value, prop); // eslint-disable-line no-param-reassign
  if (Array.isArray(value)) { lastValue = value[value.length - 1]; }
  const valueAbbr = valueDashPropToAbbrClassNameFn(lastValue, dashProp);
  /* if (WARN && !(CSS_PROP_VALUES_TO_ABBR[dashProp] && CSS_PROP_VALUES_TO_ABBR[dashProp][value])) {
    console.warn(`WARN: Couldn't find abbreviation for property:${prop} value:${value} falling back to toClassName on value:${valueAbbr}`);
  } */
  const className = `${prefix}${propAbbr}-${valueAbbr}${postfix}`;// console.log(`className:${toStr(className)}`);
  classAppend.push(className);
  if (Array.isArray(value)) {
    const props = value.map(v => `${dashProp}:${v}`).join(';');
    css.push(`.${className}{${props}}`);
  } else {
    css.push(`.${className}${pseudoPostfix}{${dashProp}:${value}}`);
  }
  return {
    css,
    classAppend
  };
} // function handleProp


function handleNested({
  dashPropToAbbrClassNameFn,
  valueDashPropToAbbrClassNameFn,
  addDefaultUnitFn,
  selector,
  style,
  // parentSelectorAbbr = ''
  postfix = '',
  prefix = ''
} = {}) {
  /*console.log(`handleNested(${toStr({
    selector, style, postfix, prefix
  })})`);*/
  if (selector.startsWith('&')) { selector = selector.substring(1); } // eslint-disable-line no-param-reassign
  let className = '';
  const classAppend = [];
  const css = [];
  //console.log(`TRACE selector.length:${toStr(selector.length)}`);
  for (let i = 0; i < selector.length;) {
    const char = selector[i];
    //console.log(`TRACE i:${toStr(i)} char:${toStr(char)}`);
    if (char === ':') { // pseudo
      let nextI = i + 1;
      className += selector.substring(nextI).split(/:/).map(p => {
        //console.log(`TRACE nextI:${toStr(nextI)} p:${toStr(p)}`);
        if (p === '') {
          nextI += 1;
          return '';
        }
        // eslint-disable-next-line no-param-reassign
        p = p.replace(/ .*/, ''); // TODO rather simple hack to support '&:hover top'
        //console.log(`TRACE &: p:${p}`);
        if (CSS_PSEUDO_SELECTORS_TO_ABBR[p]) {
          nextI += p.length + 1; // NOTE +1 due to split(/:/) add one too much after last, handeled below
          return `${CSS_PSEUDO_SELECTORS_TO_ABBR[p]}-`;
        }
        //console.log(`ERROR Unhandeled p:${toStr(p)}`);
        return '';
      }).join('');
      //console.log(`TRACE nextI:${toStr(nextI)}`);
      i = nextI - 1; // NOTE -1 because +1 to much in added after last split(:) element in map, see above
    } else if (CSS_SELECTORS_TO_ABBR[char]) {
      className += `${CSS_SELECTORS_TO_ABBR[char]}-`;
      i += 1;
    } else {
      className += char;
      i += 1;
    }
  } // for char
  //console.log(`DEBUG selector:${toStr(selector)} className:${toStr(className)}`);

  // eslint-disable-next-line no-use-before-define
  return classAppendAndCssFromStyle(style, { // "recurse"
    dashPropToAbbrClassNameFn,
    valueDashPropToAbbrClassNameFn,
    addDefaultUnitFn,
    classAppend,
    css,
    prefix: `${prefix}${className}-`,
    postfix,
    pseudoPostfix: selector
  }); // Seems like both classAppend and css gets passed by reference and modified in recursion.
} // function handleNested


export function classAppendAndCssFromStyle(
  style,
  {
    dashPropToAbbrClassNameFn = dashPropToAbbrClassName,
    valueDashPropToAbbrClassNameFn = valueDashPropToAbbrClassName,
    addDefaultUnitFn = addDefaultUnit,
    // autoprefixer = true,
    classAppend = [],
    css = [],
    prefix = '',
    postfix = '',
    pseudoPostfix = ''
  } = {}
) {
  /*console.log(`classAppendAndCssFromStyle(${toStr(style)}, ${toStr({
    classAppend, css, prefix, postfix, pseudoPostfix
  })})`);*/
  // const maybePrefixedStyle = autoprefixer ? prefixer(style) : style; // TRACE && console.log(`maybePrefixedStyle:${toStr(maybePrefixedStyle)}`);
  const maybePrefixedStyle = style;
  Object.keys(style).forEach(prop => {
    // DEBUG && console.log(`DEBUG prop:${prop}`);
    const value = maybePrefixedStyle[prop];
    if (isSet(value)) {
      if (prop.startsWith('&')) {
        const n = handleNested({
          dashPropToAbbrClassNameFn,
          valueDashPropToAbbrClassNameFn,
          addDefaultUnitFn,
          selector: prop,
          style: style[prop],
          postfix,
          prefix
        });
        classAppend.push(...n.classAppend);
        css.push(...n.css);
      } else { // not nested
        const p = handleProp({
          dashPropToAbbrClassNameFn,
          valueDashPropToAbbrClassNameFn,
          addDefaultUnitFn,
          postfix,
          prefix,
          prop,
          pseudoPostfix,
          value
        });
        classAppend.push(...p.classAppend);
        css.push(...p.css);
      } // not pseudo
    } /* else {
      WARN && console.warn(`WARN: Ignoring property:${prop} due to no value`);
    } */
  }); // forEach prop
  return {
    classAppend,
    css
  };
} // export function classAppendAndCssFromStyle
