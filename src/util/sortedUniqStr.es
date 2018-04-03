/* eslint-disable import/prefer-default-export */


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
