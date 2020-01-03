function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestDiff = Infinity;
  let pair = [null, null];

  while (arrayOne[idxOne] !== undefined && arrayTwo[idxTwo] !== undefined) {
    // since arrays are sorted, know that if we take difference between elements, we can never get closer to a smaller
    // difference by going backwards
    let currentOne = arrayOne[idxOne];
    let currentTwo = arrayTwo[idxTwo];
    let computedDiff = Math.abs(currentOne - currentTwo);

    if (computedDiff === 0) {
      return [currentOne, currentTwo];
    } else if (computedDiff < smallestDiff) {
      smallestDiff = computedDiff;
      pair[0] = currentOne;
      pair[1] = currentTwo;
    }

    if (currentOne < currentTwo) {
      idxOne += 1;
    } else {
      idxTwo += 1;
    }
  }

  return pair;
}

const testOne = [-1, 5, 10, 28, 3];
const testTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(testOne, testTwo));

// time complexity: O(n*logn) + O(m*logm) where n is length of first array and m is
// length of the second array. We are sorting both arrays, which is assumed to take O(n*logn) time, and
// the traversing of the arrays in the while loop is negligible compared to time needed to sort

// space complexity: O(1) constant space. The sorting is being done in place and no additional data
// structures are being created to hold intermediate values
