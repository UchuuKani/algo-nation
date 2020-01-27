function longestCommonPrefix(strArr) {
  let smallestStr = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    //find shortest string in input
    const currentStr = strArr[i];

    if (currentStr.length < smallestStr.length) {
      smallestStr = currentStr;
    }
  }

  let longestCommonPrefix = smallestStr; //keep track of longest common prefix found, bounded by shortest string length

  for (let i = 0; i < strArr.length; i++) {
    const currentStr = strArr[i];

    let commonPrefix = "";

    for (let j = 0; j < smallestStr.length; j++) {
      //iterate through each string in input array
      if (currentStr[j] === smallestStr[j]) {
        //if current characters match between current and shortest, add to commonPrefix
        commonPrefix += currentStr[j];
      } else {
        //case where no match, stop looping
        break;
      }
    }

    if (commonPrefix.length < longestCommonPrefix.length) {
      //re-assign longestCommonPrefix if a shorter common length is found
      longestCommonPrefix = commonPrefix;
    }
  }

  return longestCommonPrefix;
}

// time complexity: O(n*m) where n is length of input array and m is size of the smallest string in the input. If assuming string
// size is constrained to a certain length, can assume O(n) time complexity

// space complexity: O(1) space assuming string lengths are constrained by a constant value
