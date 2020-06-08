// Given an integer, write a function to determine if it is a power of two, LC # 231

// my solution, iterative

var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  var current = n;

  while (current > 1) {
    current /= 2;
  }

  return current == 1 ? true : false;
};

// time is O(log n) I believe, since the size of the input is being halved at each iteration, constant space

// solutions by motorix on LeetCode, 2/27/2020
// https://leetcode.com/problems/power-of-two/discuss/63966/4-different-ways-to-solve-Iterative-Recursive-Bit-operation-Math

// iterative solution
function isPowerOfTwoIt(n) {
  if (n <= 0) return false;
  while (n % 2 == 0) n /= 2;
  return n == 1;
}

// recursive solution
function isPowerOfTwoRec(n) {
  return n > 0 && (n == 1 || (n % 2 == 0 && isPowerOfTwo(n / 2)));
}

// bit manipulation solution
function isPowerOfTwoBit(n) {
  return n > 0 && (n & (n - 1)) == 0;
}

// math derivation

function isPowerOfTwoMath(n) {
  return n > 0 && 1073741824 % n == 0;
}
