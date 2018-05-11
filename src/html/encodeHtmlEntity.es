// https://dev.w3.org/html5/html-author/charref
// https://www.w3.org/wiki/Common_HTML_entities_used_for_typography
// https://www.w3schools.com/html/html_entities.asp
// http://rabbit.eng.miami.edu/info/htmlchars.html

export function encodeHtmlEntity(str) {
  return String(str)
    .replace(/\t/g, '&#9;') // Tab
    .replace(/\n/g, '&#10;') // NewLine
    .replace(/\r/g, '&#13;') // Carriage return
    .replace(/'/g, '&#39;'); // apos
}
