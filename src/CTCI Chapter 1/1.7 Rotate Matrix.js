'use strict';
/**
* 1.7 Rotate Matrix: Given an image represented by an NxN matrix,
* where each pixel in the image is 4 bytes, write a method to rotate
* the image by 90 degrees. Can you do this in place?
* Cheesy matrix example
* before                       after
* ---------------         ---------------
* |  1  2  3  4 |         | 13  9  5  1 |
* |  5  6  7  8 \         | 14 10  6  2 |
* |  9 10 11 12 |         | 15 11  7  3 |
* | 13 14 15 16 |         | 16 12  8  4 |
* ---------------         ---------------
*/

exports.default = (matrix) => {
  //check to see if a valid matrix has been passed in
  if (!matrix || matrix.length == 0 || !matrix[matrix.length - 1][matrix.length - 1]) {
    return matrix;
  }
  //get the length of the matrix
  let matrixLength = matrix.length;
  //iterate over the matrix, half the matrix length because it assumes 4x4 matrix
  //only iterates 2 times, rotating outside and then inside
  for (let level = 0; level < matrixLength / 2; level++) {
    //renaming to make it easier to understand, index of first
    let first = level;
    //index of last item
    let last = matrixLength - 1 - level;
    //iterate over individual matrix items, looking at 4 items at the same time
    //each item is at the 4 corners of the square
    for (let index = first; index < last; index++) {
      //used to get the opposite ends of the square
      //on first iteration, when on [0] [0] -> [last - offset][0] = [3][0]
      let offset = index - first;
      //store top value, initial [0][0] = 1
      let top = matrix[first][index];
      //left -> top, initial -> [0][0] = 1
      //updated from [3][0] -> [0][0] = 13
      matrix[first][index] = matrix[last - offset][first];
      //bottom -> left, initial -> [3][0] = 13
      //updated from [3][3] -> [3][0] = 16
      matrix[last - offset][first] = matrix[last][last - offset];
      //right -> bottom, initial -> [3][3] = 16
      //updated from [0][3] -> [3][3] = 4
      matrix[last][last - offset] = matrix[index][last];
      //top -> right, initial -> [0][3] = 4
      //updated from [0][0] from top variable -> [0][3] = 1
      matrix[index][last] = top;
    }
  }
  return matrix;
};
