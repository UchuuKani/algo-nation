function maximumSubarray(anArr) {
  let maxFound = anArr[0];
  let currentMax = anArr[0];

  for (let i = 1; i < anArr.length; i++) {
    let int = anArr[i];
    currentMax = Math.max(int, currentMax + int);
    maxFound = Math.max(maxFound, currentMax);
  }

  return maxFound;
}

const test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const test2 = [17, -5, -3, 28];
const test3 = [17, -500, -3, 28];
const test4 = [-5, -10, -80, -23];
const test5 = [1];

console.log(maximumSubarray(test5));

// time complexity: O(n) where n is length of input array. Iterate through whole array once. There is variable assignment
// being done in the loop, and Math.max is only calculating the max from two values independent of input size

// space complexity: O(1), constant space, only variable re-assignment being performed
