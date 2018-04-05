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
