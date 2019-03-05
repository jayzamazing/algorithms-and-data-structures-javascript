'use strict';
/**
* 1.8 Zero Matrix: Write an algorithm such that if an element in an
* MxN matrix is O, its entire row and column are set to 0.
*/

exports.default = (matrix) => {
  //check for a valid matrix
  if (!matrix || !matrix[matrix.length - 1]) {
    return matrix;
  }
  //get the height and width of the matrix
  const matrixHeight = matrix.length;
  //initialize rows and columns to zero out
  let rows = {};
  let cols = {};
  //iterate over the matrix using the height
  for (let i = 0; i < matrixHeight; i++) {
    //iterate over the matrix using the width
    for (let j = 0; j < matrix[i].length; j++) {
      //if 0 is at this index, then store true
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  //iterate over items in rows
  for (let row in rows) {
    for (let i = 0; i < matrix[row].length; i++) {
      //zero out this index
      matrix[row][i] = 0;
    }
  }
  //iterate over items in cols
  for (let col in cols) {
    for (let i = 0; i < matrixHeight; i++) {
      //zero out this index
      matrix[i][col] = 0;
    }
  }
  return matrix;
};
