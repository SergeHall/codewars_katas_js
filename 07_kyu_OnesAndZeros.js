// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//
// Examples: Testing: [0, 0, 0, 1] ==> 1, Testing: [0, 0, 1, 0] ==> 2, Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  let num = 0;
  let n = arr.length - 1;

  for (let i in arr) {
    num += arr[i] * (2 ** n);
    n -= 1;
  }
  return num
};