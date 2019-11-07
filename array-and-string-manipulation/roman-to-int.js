// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4
// Example 3:

// Input: "IX"
// Output: 9
// Example 4:

// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = function(s) {
  const hash = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900
  }
  
  let sum = 0;
  let pointer = 0;
  
  while (pointer < s.length) {
      const currentChar = s[pointer];
      const nextChar = s[pointer + 1];
      
      if (hash[currentChar + nextChar]) {
          sum += hash[currentChar + nextChar];
          pointer += 2;
      } else {
          sum += hash[currentChar];
          pointer += 1;
      }
  }
  return sum;
};
