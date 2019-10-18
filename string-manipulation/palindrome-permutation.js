//Interview Baked
//Checks if any permutation of an input string can be a palindrome - returns a boolean

function hasPalindromePermutation(theString) {
  const letterCount = {};
  let oneLetterCount = 0;
  
  for (let i = 0; i < theString.length; i++) { //populates hash table with letter counts
    const currentLetter = theString[i];

    if (!letterCount[currentLetter]) {
      letterCount[currentLetter] = 1;
    } else letterCount[currentLetter] += 1;
  }
  
  for (char in letterCount) {
    const charCount = letterCount[char];
    if (charCount % 2 && charCount !== 1) return false
    else if (charCount === 1) oneLetterCount++;
  }

  return oneLetterCount > 1 ? false : true
}


//hasPalindromePermutation('aabcbcd') => true

//hasPalindromePermutation('aabccbdd'), true

//hasPalindromePermutation('aabcd') => false

//hasPalindromePermutation('aabbcd') => false

//hasPalindromePermutation('') => true

//hasPalindromePermutation('a') => true