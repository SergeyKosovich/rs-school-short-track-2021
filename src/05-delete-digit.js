/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = `${n}`.split('');
  const acc = [];
  for (let i = 0; i < a.length; i++) {
    const vrem = a.slice();
    vrem.splice(i, 1);
    acc.push(vrem);
  }
  function compareNumeric(bb, aa) {
    if (aa > bb) { return 1; }
    if (aa === bb) { return 0; }
    if (aa < bb) { return -1; }
    return '';
  }
  acc.forEach((item, index) => {
    acc[index] = item.join('');
  });
  acc.sort(compareNumeric);
  return +acc[0];
}

module.exports = deleteDigit;
