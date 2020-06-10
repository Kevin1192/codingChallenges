// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// Output:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 


// Output
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]


//If we are allowed to create a new matrix to store the change:

var rotate = function (matrix) {
  // n x n
  let n = matrix.length;
  let newMatrix = [];
  for (let i = 0; i < n; i++) {
    newMatrix.push(new Array(n).fill(0));
  }
  // for each matrix[i][j] => newMatrix[j][n-1-i] = matrix[i][j]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }
  return newMatrix;
};


// if we are not allowed to create a new matrix (i.e. only in-place change): 

// To rotate the matrix 90% degree, first transpose, then flip horizontally.
var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++){
        for (let j =i + 1; j < n; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < n; i++){
        for (let j =0; j < n/2; j++){
            [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j], matrix[i][j]]
        }
    }
};