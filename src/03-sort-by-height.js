/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const accum = [];
  const arr2 = arr;
  arr2.forEach((item) => {
    if (item !== -1) {
      accum.push(item);
    }
  });
  accum.sort((a, b) => a - b);
  arr2.forEach((item, index) => {
    if (item !== -1) {
      arr2[index] = accum.shift();
    }
  });
  return arr2;
}

module.exports = sortByHeight;
