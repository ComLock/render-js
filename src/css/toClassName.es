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
export function toClassName(value) {
  return `${value}`                  // Handle non-strings
    .replace(/[\n\r\t]+/gm, '')      // Remove some whitespace
    .replace(/([A-Z])/g, '-$1')      // Insert - before large letters
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace multiple illegal chars with -
    .replace(/^-/, '')              // Trim - from start of text
    .replace(/-$/, '')              // Trim - from end of text
    .toLowerCase();
} // export function toClassName
