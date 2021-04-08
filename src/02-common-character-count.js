/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a, b) {
  const s1 = a.split('');
  const s2 = b.split('');
  let c = 0;
  s1.forEach((item) => {
    if (s2.indexOf(item) >= 0) {
      c++;
      s2.splice(s2.indexOf(item), 1);
    }
  });
  return c;
}

module.exports = getCommonCharacterCount;
