// LeetCode # 136
var singleNumber = function(nums) {
  var numHash = {};

  for (let num of nums) {
    // populate a hash table with frequency counts of each number
    if (numHash[num] === undefined) {
      numHash[num] = 1;
    } else {
      numHash[num] += 1;
    }
  }

  for (let number in numHash) {
    if (numHash[number] === 1) {
      return number;
    }
  }
};

// Time complexity: O(n) where n is the length of the nums array input. We make one full pass through the nums array when creating
// a hash table of frequencies. We then make a pass through the hash table to return the first element that only has a value of 1

// Space complexity: O(n) where n is the length of the input array. The number of entries in the hash table is equal to the number
// of unique numbers in the input array, with all but one number having a duplicate present. So space could be considered O(1/2 n)
// which reduces

// O(1) space complexity solution requires bit manipulation
