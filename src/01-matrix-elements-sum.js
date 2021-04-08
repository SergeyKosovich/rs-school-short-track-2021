/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const acum = [];
  const indexacc = [];
  matrix.forEach((item) => {
    item.forEach((itemz, indexz) => {
      if (!indexacc.includes(indexz)) {
        if (itemz !== 0) {
          acum.push(itemz);
        } else {
          indexacc.push(indexz);
        }
      }
    });
  });
  const result = acum.reduce((sum, current) => sum + current, 0);
  return result;
}

module.exports = getMatrixElementsSum;
