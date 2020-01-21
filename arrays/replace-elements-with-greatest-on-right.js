function replaceElements(inputArr) {
  if (inputArr.length <= 1) {
    return [-1];
  }

  let maxToRight = inputArr[inputArr.length - 1]; //1 at first

  for (let i = inputArr.length - 2; i >= 0; i--) {
    //i = 4
    const currentEl = inputArr[i]; //6 at first

    if (currentEl > maxToRight) {
      inputArr[i] = maxToRight; //1
      maxToRight = currentEl;
    } else {
      inputArr[i] = maxToRight;
    }
  }

  inputArr[inputArr.length - 1] = -1;
  return inputArr;
}

// time complexity: O(n), where n is length of input array. Need to traverse through the array once
// space complexity: O(1) since no new data structures are being created
