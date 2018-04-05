export function cdata(content = '') {
  return `/*<![CDATA[*/
${content}
/*]]>*/`;
}
