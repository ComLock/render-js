/* eslint-disable no-restricted-globals */
export function isInt(value) {
  // console.log(`isInt(${toStr(value)})`);
  // const bool =
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  // const bool = !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
  // console.log(`isInt(${toStr(value)}) --> ${bool}`);
  // return bool;
}
