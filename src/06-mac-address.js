/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const nums = '0123456789';
  const alph = 'ABCDEF';
  const f = n.split('-');
  if (f.length !== 6) {
    return false;
  }
  let a = true;
  f.forEach((item) => {
    if (
      !(alph.includes(item[0]) || nums.includes(item[0]))
      && (alph.includes(item[1]) || nums.includes(item[1]))
    ) {
      a = false;
    }
  });
  return a;
}

module.exports = isMAC48Address;
