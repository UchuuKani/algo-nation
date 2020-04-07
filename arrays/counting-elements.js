// LC April challenge 2020 Day 7
var countElements = function (arr) {
  var count = 0;
  var freqHash = {};

  for (let int of arr) {
    if (freqHash[int] === undefined) {
      freqHash[int] = 1;
    } else {
      freqHash[int] += 1;
    }
  }

  for (let currInt of arr) {
    if (freqHash[currInt + 1] !== undefined || freqHash[currInt + 1] > 0) {
      count++;
      freqHash[currInt + 1]--;
    }
  }

  return count;
};

// time complexity: O(n) where n is the length of the input array. We first generate a hash table by going through each element, and then we do one more separate pass through
// every element
//
// space complexity: O(n) where n is the length of the input array. In the worst case, there will be n distinct integers in the input array which we will have n entries for in
// the hash table. If duplicates integers are present space will be slightly reduced
