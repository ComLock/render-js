/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */


export {
  dasherize,
  isArray,
  isArrayOrFuncOrString,
  isArrayOrString,
  isEmptyObject,
  isFunction,
  isObject,
  isSet,
  isString,
  sortedUniqStr,
  toStr
} from './src/util.es';
export {objToStyleAttr as objectToCssDeclarations} from './src/css/objToStyleAttr.es'; // NOTE Deprecated
export const UNICODE_LETTERS = 'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ';


export function camelize(str) {
  // console.log(`camelize(${toStr(str)})`);
  // const camelizedStr =
  return str.replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (letter, index) => index === 0 // eslint-disable-line no-confusing-arrow
      ? letter.toLowerCase()
      : letter.toUpperCase()
  ).replace(/(\s|-)+/g, '');
  // console.log(`camelize(${toStr(str)}) --> ${camelizedStr}`);
  // return camelizedStr;
} // function camelize


export const dict = arr => Object.assign(...arr.map(([k, v]) => ({ [k]: v })));


export function isBool(value) {
  return typeof (value) === typeof (true);
}


/* eslint-disable no-restricted-globals */
export function isInt(value) {
  // console.log(`isInt(${toStr(value)})`);
  // const bool =
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  // const bool = !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  // console.log(`isInt(${toStr(value)}) --> ${bool}`);
  // return bool;
}


export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
/* eslint-enable no-restricted-globals */


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
