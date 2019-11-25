// Given an unsorted array of integers, find the length of longest increasing subsequence.
// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.

const lengthOfLIS = function(nums) {
  if (nums.length === 0) {
      return 0;
  }
  //dp
  //bottom-up tabulation: build up an array where indices correspond to
  //input array elements
  //initialize array with 1s (each integer has at least one subsequence of itself)
  //for each element in input array, loop through all preceding elements
      //if current preceding element is less than current element, add that preceeding
      //value's dp array value to the current element's dp array value
      //in cases like checking the intger 7 (2 -> 5 and 2 -> 3 both have subseq of 2 at               //positions 5 and 3 of dp array) in given example, would need to 
      //check if the current value's dp array value is greater than the result of
      //something
  //once finished looping through input array, return the greatest value found in it (could be     //multiple, not guaranteed that last element in dp array will be the largest)

  const dp = nums.map(num => {
      return 1;
  })
  
  for (let i = 1; i < dp.length; i++) {
      const currentEl = nums[i];
      const currentDp = dp[i]
      
      for (let j = 0; j < i; j++) {
          const currentSub = nums[j];
          const subDp = dp[j];
          
          if (currentEl > currentSub) {
            dp[i] = Math.max(dp[i], subDp + 1);
          }
      }
  }
  return Math.max(...dp);
};