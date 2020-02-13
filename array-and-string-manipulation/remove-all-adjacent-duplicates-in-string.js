var removeDuplicates = function(S) {
  const stack = [S[0]];
  let index = 1;

  while (index < S.length) {
    const prevLetter = stack[stack.length - 1];
    const currentLetter = S[index];

    if (currentLetter !== prevLetter) {
      stack.push(currentLetter);
    } else {
      stack.pop();
    }

    index++;
  }

  return stack.join("");
};

// Time complexity: O(n) where n is number of characters in the string

// Space complexity: O(l) where l is length of the longest string composable. As you iterate through the string, you are saving
// the longest valid string. Any duplicate characters are popped off. Alternatively, space can be though of as O(n - d) where n
// is number of characters in input and d is the total length of all duplicates in the string
