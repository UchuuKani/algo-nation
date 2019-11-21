//https://leetcode.com/problems/search-insert-position

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where
// it would be if it were inserted in order.

// You may assume no duplicates in the array.

const searchInsert = function(nums, target) { 
  if (target > nums[nums.length - 1]) { //do a binary search if target is smaller than greatest value and larger than smallest
    return nums.length;
  } else if (target < nums[0]) {
    return 0;
  }

  let left = 0;
  let right = nums.length;
  
  while (left <= right) {
      let midpoint = Math.floor((left + right) / 2);
      const midVal = nums[midpoint];
      
      if (midVal === target) {
          return midpoint;
      } else if (target > midVal) {
          left = midpoint + 1;
      } else if (target < midVal) {
          right = midpoint - 1;
      }
  }
  return left;
};

console.log("target not found, but would be middle", searchInsert([1, 3, 5, 6, 10, 11, 13, 15], 7), "should be 4"); //returns 4
console.log("target not found, larger than last element", searchInsert([1, 3, 5, 6], 7), "should be 4"); //returns 4
console.log("target not found, smaller than first element", searchInsert([2, 3, 5, 6], 1), "should be 0"); //returns 0
console.log("target found", searchInsert([2, 3, 5, 6], 5), "should be 2"); //returns 2