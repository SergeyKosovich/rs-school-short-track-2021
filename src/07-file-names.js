/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(mas) {
  const nams = '0123456789';
  const mas2 = mas.slice();
  for (let i = 0; i < mas2.length; i++) {
    for (let i2 = 1; i2 <= mas2.length - i - 1; i2++) {
      if (mas2[i] === mas2[i + i2]) {
        if (
          nams.includes(mas2[i + i2][mas2[i + i2].length - 2])
          && nams.includes(mas2[i + i2][mas2[i + i2].length - 5])
        ) {
          mas2[i + i2] = mas2[i + i2].split('');
          mas2[i + i2].pop();
          mas2[i + i2].pop();
          mas2[i + i2].pop();
          mas2[i + i2][mas2[i + i2].length - 2] = +mas2[i + i2][mas2[i + i2].length - 2] + 1;
          mas2[i + i2] = mas2[i + i2].join('');
        } else {
          mas2[i + i2] += '(1)';
        }
      }
    }
  }
  return mas2;
}

module.exports = renameFiles;
