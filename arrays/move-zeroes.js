// constraints: perform in place and minimize operations

function moveZeroes(intArr) {
  if (intArr.length <= 1) {
    return intArr;
  }
  let count = 0;
  let firstPointer = 0;
  let secondPointer = 1;

  while (secondPointer !== intArr.length) {
    console.log("the count", count);
    if (intArr[firstPointer] === 0 && intArr[secondPointer] !== 0) {
      intArr[firstPointer] = intArr[secondPointer];
      intArr[secondPointer] = 0;

      firstPointer += 1;
      secondPointer += 1;
      count++;
    } else if (intArr[firstPointer] === 0 && intArr[secondPointer] === 0) {
      secondPointer += 1;
      count++;
    } else {
      firstPointer += 1;
      secondPointer += 1;
      count++;
    }
  }

  return intArr;
}

const test = [1, 2, 3, 4, 5];
console.log(moveZeroes(test));

// time complexity: O(n) where n is length of input. The second pointer must move to the last element of the input
// array regardless of the positions of 0s and non-zero integers, and all operations are constant time within the loop
// without adding more iterations to compute
// space complexity: O(1) space since only pointers being used to keep track of a specific window
