/* eslint-disable no-multi-spaces */
/* http://stackoverflow.com/questions/448981/which-characters-are-valid-in-css-class-names-selectors
 Basically, a name must begin with an underscore (_), a hyphen (-), or a letter(a–z),
  followed by any number of hyphens, underscores, letters, or numbers.
 There is a catch: if the first character is a hyphen,
  the second character must2 be a letter or underscore,
  and the name must be at least 2 characters long.
 -?[_a-zA-Z]+[_a-zA-Z0-9-]*
 https://discuss.enonic.com/t/sanitize-username-in-auth-createuser/996/3
*/

const RE_WHITESPACE = /[\n\r\t]+/gm;
const RE_CAPTURE_UPPER = /([A-Z])/g; // NOTE Will match some unicode letters
const RE_NOT_DIGIT_OR_LOWER = /[^0-9a-z]+/g; // NOTE Will match some unicode letters
const RE_START_WITH_DASH = /^-/;
const RE_END_WITH_DASH = /-$/;


export function toClassName(value) {
  return `${value}`                      // Handle non-strings
    .replace(RE_WHITESPACE, '')          // Remove some whitespace
    .replace(RE_CAPTURE_UPPER, '-$1')            // Insert - before large letters
    .toLowerCase()
    .replace(RE_NOT_DIGIT_OR_LOWER, '-') // Replace multiple illegal chars with -
    .replace(RE_START_WITH_DASH, '')     // Trim - from start of text
    .replace(RE_END_WITH_DASH, '');      // Trim - from end of text
} // export function toClassName


/*const RE_NOT_DIGIT_OR_ALPHA = /[^0-9A-Za-z]+/g;

export function toClassNameToLowerCaseLast(value) {
  return `${value}`                      // Handle non-strings
    .replace(RE_WHITESPACE, '')          // Remove some whitespace
    .replace(RE_CAPTURE_UPPER, '-$1')            // Insert - before large letters
    .replace(RE_NOT_DIGIT_OR_ALPHA, '-') // Replace multiple illegal chars with -
    .replace(RE_START_WITH_DASH, '')     // Trim - from start of text
    .replace(RE_END_WITH_DASH, '')       // Trim - from end of text
    .toLowerCase();
} // export function toClassName


export function toClassNameStartsWithEndsWith(value) {
  const str = `${value}`              // Handle non-strings
    .replace(RE_WHITESPACE, '')  // Remove some whitespace
    .replace(RE_CAPTURE_UPPER, '-$1')  // Insert - before large letters
    .toLowerCase()
    .replace(RE_NOT_DIGIT_OR_LOWER, '-'); // Replace multiple illegal chars with -
  return str.substring(
    str.startsWith('-') ? 1 : 0,                    // Trim - from start of text
    str.endsWith('-') ? str.length - 1 : str.length // Trim - from end of text
  );
} // export function toClassName*/


/* Charcodes
  9 TAB
 10 NEWLINE
 13 CARRIAGE_RETURN
 32 SPACE
 48 0
 57 9
 65 A
 90 Z
 97 a
122 z
*/
/*export function toClassNameCharCode(value) {
  const str = `${value}`;
  let className = '';
  for (let i = 0; i < str.length; i += 1) {
    //const char = str.charAt(i);
    const charCode = str.charCodeAt(i);
    //const codePoint = str.codePointAt(i);
    //console.log(`chatAt(${i}):${char} chatCodeAt(${i}):${charCode} codePointAt(${i}):${codePoint}`);
    if (charCode === 9 || charCode === 10 || charCode === 13) {
      // noop
    } else if (charCode > 64 && charCode < 91) { // A-Z
      //console.log(`UPPERCASE chatAt(${i}):${char} chatCodeAt(${i}):${charCode} codePointAt(${i}):${codePoint}`);
      if (i !== 0 && !className.endsWith('-')) {
        className += '-';
      }
      //className += char.toLowerCase();
      className += str.charAt(i).toLowerCase();
      //className += String.fromCharCode(charCode + 32); // toLowerCase
    } else if ((charCode > 47 && charCode < 58) || (charCode > 96 && charCode < 123)) { // 0-9
      //console.log(`ALPHA or LOWER chatAt(${i}):${char} chatCodeAt(${i}):${charCode} codePointAt(${i}):${codePoint}`);
      //className += char;
      className += str.charAt(i);
      //className += String.fromCharCode(charCode);
    } else if (i !== 0 && !className.endsWith('-')) {
      className += '-';
    }
  } // for
  return className
    .replace(RE_END_WITH_DASH, '');   // Trim - from end of text;
}


const RE_SINGLE_DIGIT_OR_LOWER = /[0-9a-z]/;
const RE_SINGLE_UPPER = /[A-Z]/;
const RE_SINGLE_WHITE_SPACE = /[\n\r\t]/;


export function toClassNameMatch(value) {
  const str = `${value}`;
  let className = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    if (char.match(RE_SINGLE_DIGIT_OR_LOWER)) {
      className += char;
    } else if (char.match(RE_SINGLE_UPPER)) {
      if (i !== 0 && !className.endsWith('-')) {
        className += '-';
      }
      className += char.toLowerCase();
    } else if (char.match(RE_SINGLE_WHITE_SPACE)) {
      // noop
    } else if (i !== 0 && !className.endsWith('-')) {
      className += '-';
    }
  } // for
  return className
    .replace(RE_END_WITH_DASH, '');   // Trim - from end of text;
}


export function toClassNameSearch(value) {
  const str = `${value}`;
  let className = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    if (char.search(RE_SINGLE_DIGIT_OR_LOWER) !== -1) {
      //console.log(`LOWER ${char}`);
      className += char;
    } else if (char.search(RE_SINGLE_UPPER) !== -1) {
      //console.log(`UPPER ${char}`);
      if (i !== 0 && !className.endsWith('-')) {
        className += '-';
      }
      className += char.toLowerCase();
    } else if (char.search(RE_SINGLE_WHITE_SPACE) !== -1) {
      //console.log(`WHITESPACE ${char}`);
      // noop
    } else if (i !== 0 && !className.endsWith('-')) {
      className += '-';
    }
  } // for
  return className
    .replace(RE_END_WITH_DASH, '');   // Trim - from end of text;
}*/
