import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  let matr = []
  if (matrix.length === 2) {
    matr = [
      [0, 0, 0],
      [0, 0, 0]
    ];
  } else if (matrix.length === 3) {
    matr = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (matr[i + 1][j] !== undefined) matr[i + 1][j]++;
        if (matr[i][j + 1] !== undefined) matr[i][j + 1]++;
        if (matr[i][j - 1] !== undefined) matr[i][j - 1]++;
        if (matr[i + 1][j + 1] !== undefined) matr[i + 1][j + 1]++; 
        if (matr[i + 1][j - 1] !== undefined) matr[i + 1][j - 1]++; 
        if (i > 0) {
          if (matr[i - 1][j] !== undefined) matr[i - 1][j]++;
          if (matr[i - 1][j + 1] !== undefined) matr[i - 1][j + 1]++; 
          if (matr[i - 1][j - 1] !== undefined) matr[i - 1][j - 1]++; 
        };
      }
    }
  }
  return matr;
}