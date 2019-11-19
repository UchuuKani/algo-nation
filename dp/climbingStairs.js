//iterative bottom-up approach
const climbStairs = function(n) {
  //build up array of paths
  const memo = [];
  memo[0] = 1; //if at 0th or 1st step, only one path
  memo[1] = 1;
  
  for (let i = 2; i <= n; i++) { //with two options for step size, can build up to the last and second to last step
      memo[i] = memo[i - 1] + memo[i - 2];
  }
  
  return memo[memo.length - 1]; //returns last item in the array built up
};

//recursive memoization approach
const climbStairsMemo = function(n, memo = {}) {
  if (n <= 1) { //if at the 1st or 0th stair, only one path
      return 1;
  }
  if (!memo[n]) { //if memo map doesn't have a result, compute and save the result
      memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  }
  
  return memo[n]; //return the memoized result once it is computed
}