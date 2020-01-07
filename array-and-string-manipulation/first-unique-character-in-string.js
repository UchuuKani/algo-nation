function firstUniqueChar(inputStr) {
  const letterHash = {};

  for (const char of inputStr) {
    if (!letterHash[char]) {
      // fails for an empty string as input
      letterHash[char] = 1;
    } else {
      letterHash[char] += 1;
    }
  }

  for (let i = 0; i < inputStr.length; i++) {
    const currentChar = inputStr[i];

    if (letterHash[currentChar] === 1) {
      return i;
    }
  }

  return -1;
}

// time complexity: O(n) time, where n is length of input string. Takes O(n) time to build up hash table, and O(n) time
// to iterate through entirety of the string

// space complexity: O(1) space since problem limits inputs to 26 characters (all lowercase alphabet)
