module.exports = function countCats(matrix) {
  let count = 0;
  for(matrixItem of matrix) {
    for (item of matrixItem) {
      count = item == '^^' ? ++count : count;
    }
  };
  return count;
};
