/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const acc = [];
  for (let i = 0; i < matrix.length; i++) {
    acc.push([]);
  }
  matrix.forEach((item, index1) => {
    item.forEach((item2, index2) => {
      let a = 0;
      try {
        if (matrix[index1][index2 - 1] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1][index2 + 1] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 - 1][index2 - 1] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 - 1][index2] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 - 1][index2 + 1] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 + 1][index2 - 1] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 + 1][index2] === true) { a++; }
      } catch (e) { a++; a--; }
      try {
        if (matrix[index1 + 1][index2 + 1] === true) { a++; }
      } catch (e) { a++; a--; }
      acc[index1].push(a);
    });
  });
  return acc;
}

module.exports = minesweeper;
