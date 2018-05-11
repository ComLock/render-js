/* eslint-disable quotes */


export function decodeHtmlEntity(str) {
  return String(str)
    .replace(/&#9;/g, "\t") // Tab
    .replace(/&#10;/g, "\n") // NewLine
    .replace(/&#13;/g, "\r") // Carriage return
    .replace(/&#39;/g, "'"); // apos
}
