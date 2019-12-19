function productSum(array, coefficient = 1, nesting = 1) {
  //return some new array with algebraic operations performed
  let runningSum = 0;

  for (const element of array) {
    if (Array.isArray(element)) {
      const newNesting = nesting + 1;
      const newCoefficient = coefficient * newNesting;

      runningSum += productSum(element, newCoefficient, newNesting);
    } else {
      runningSum += (element * coefficient);
    }
  }

  return runningSum;
}

const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(test));
// time and space complexity

//Time is O(n) where n is the total number of elements in the original array including all elements in nested subarrays.
//Need to include the un-nested elements 5, 2, etc. then include the nested [7, -1] array as a third operation, and for
//that nested array, include the operations performed to sum up its values

//Space is O(d) where d is the maximum depth of nesting. For every level of nesting, an additional frame needs
//to be added to the call stack. For the test input, d is 3

