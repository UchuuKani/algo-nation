function uniquePaths(m, n) {
  const dpArr = new Array(m).fill(1).map(row => {
    return new Array(n).fill(1);
  }); //creates array and fills with 1s, m is num rows and n is num columns

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //for every element not including first row and first column
      //set current value equal to sum of element one column to the left, and one row (same column) above
      //since movement is constrained to only right and down. Can only get to the current position by taking
      //previous paths that lead to it, so number of paths to current element is sum of all paths leading up to it
      dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1];
    }
  }

  return dpArr[m - 1][n - 1];
}

// time complexity: O(m x n), takes this long to initialize the dp array, and O(m x n) time to fill out the dp
// array with values (m is num rows, n is num columns)
// space complexity: O(m x n) space for storing the dp array (m is num rows, n is num columns)
console.log(uniquePaths(5, 3));
