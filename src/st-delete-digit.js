import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let numArr = []
  let str = n.toString()
  for (let i = 0; i < str.length; i++){
    let tempArr = str.split('');
    tempArr.splice(i, 1);
    numArr.push(+tempArr.join(''))
  }
  numArr.sort((a, b) => b - a)
  return numArr[0];
}
