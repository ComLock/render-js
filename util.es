/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */


// const DEBUG = false;
// const TRACE = false;


export const UNICODE_LETTERS = 'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ';


export function toStr(value) {
  return JSON.stringify(value, null, 4);
}


export function camelize(str) {
  // TRACE && console.log(`camelize(${toStr(str)})`);
  // const camelizedStr =
  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => index === 0 // eslint-disable-line no-confusing-arrow
      ? letter.toLowerCase()
      : letter.toUpperCase()
  ).replace(/(\s|-)+/g, '');
  // DEBUG && console.log(`camelize(${toStr(str)}) --> ${camelizedStr}`);
  // return camelizedStr;
} // function camelize


export function dasherize(str) {
  // TRACE && console.log(`dasherize(${toStr(str)})`);
  // const dasherizedStr =
  return `${str}` // handle non-strings
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase();
  // DEBUG && console.log(`dasherize(${toStr(str)}) --> ${dasherizedStr}`);
  // return dasherizedStr;
} // function dasherize


export const dict = arr => Object.assign(...arr.map(([k, v]) => ({ [k]: v })));


export function isArray(value) {
  return Array.isArray(value);
}


export function isBool(value) {
  return typeof (value) === typeof (true);
}


export function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply); // highly performant from underscore
}

/* eslint-disable no-restricted-globals */
export function isInt(value) {
  // TRACE && console.log(`isInt(${toStr(value)})`);
  // const bool =
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  // const bool = !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  // DEBUG && console.log(`isInt(${toStr(value)}) --> ${bool}`);
  // return bool;
}


export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
/* eslint-enable no-restricted-globals */


export function isSet(value) {
  if (typeof value === 'boolean') { return true; } // If value is true/false it is set
  return value !== null && typeof value !== 'undefined';
}


export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


export function isArrayOrString(value) {
  return Array.isArray(value) || isString(value);
}


export function isArrayOrFuncOrString(value) {
  return Array.isArray(value) || isString(value) || isFunction(value);
}


// NOTE Deprecated
export function objectToCssDeclarations(obj, { newline = '' } = {}) {
  return Object.keys(obj)
    .map(name => `${dasherize(name)}: ${obj[name]}`)
    .join(`;${newline}`);
} // function objectToCssDeclarations


// This implementation has been profiled. If you want to change it,
// duplicate it and profile old and new too see if your changes are faster...
export function sortAndRemoveDups(arr) {
  const sorted = arr.sort();
  const uniq = [];
  let prev = null;
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] !== prev) { uniq.push(sorted[i]); }
    prev = sorted[i];
  }
  return uniq;
}

// This implementation has been profiled. If you want to change it,
// duplicate it and profile old and new too see if your changes are faster...
export function sortedUniqStr(arr) {
  const sorted = arr.sort();
  let str = '';
  let prev = null;
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] !== prev) { str += ` ${sorted[i]}`; }
    prev = sorted[i];
  }
  return str.substr(1);
}
// Slower:
//return arr.sort().reduce((x, y, i, a) => y === a[i - 1] ? x : `${x} ${y}`, '').substr(1);
