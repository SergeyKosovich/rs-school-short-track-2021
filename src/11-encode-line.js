/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const d = str.split('');
  let prefiks = 2;
  d.forEach((bukva, indeks) => {
    prefiks = 2;
    while (d.indexOf(bukva, indeks + 1) === indeks + 1) {
      d.splice(d.indexOf(bukva, indeks + 1), 1);
      d[indeks] = `${prefiks}${bukva}`;
      prefiks++;
    }
  });
  return d.join('');
}

module.exports = encodeLine;
