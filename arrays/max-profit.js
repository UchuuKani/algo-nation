function maxProfit(stocksArr) {
  let localMin = Infinity;
  let maxP = 0;

  for (const current of stocksArr) {
    localMin = Math.min(current, localMin);
    maxP = Math.max(current - localMin, maxP);
  }

  return maxP;
}

console.log(maxProfit([7, 2, 5, 1, 6, 4])); // => 5
console.log(maxProfit([7, 6, 4, 3, 1])); // => 0

// time complexity: O(n) where n is length of input array. Need to iterate through length of the input

// space complexity: O(1), only variable reassignment being done with no additional data structures
