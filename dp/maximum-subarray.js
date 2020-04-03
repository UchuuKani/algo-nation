// LC # 53
function maximumSubarray(numArr) {
  let maxFound = numArr[0];
  let currentMax = numArr[0];

  for (let i = 1; i < numArr.length; i++) {
    // starting from the element at the 1st index
    let int = anArr[i];
    // currentMax is the greater value between the current (int), and (currentMax + int)
    currentMax = Math.max(int, currentMax + int);
    // maxFound is the greater value between the largest max we've found and the currentMax we calculated
    maxFound = Math.max(maxFound, currentMax);
  }

  return maxFound;
}

// time complexity: O(n) where n is the length of the array input as we iterate through it once
// space complexity: O(1) since no additional data structures are being used to hold values. Only variables are being updated

//
//
// solution with extra space involved
function maximumSubarraySpace(numArr) {
  let dp = [numArr[0]];
  let max = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    dp[i] = numArr[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
}

// time complexity is same as above, but space complexity is O(n) since space is being used to store intermediate calculations
