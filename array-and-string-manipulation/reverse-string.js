function reverseStr(aStr, idx = aStr.length - 1) {
  if (aStr.length === 0) {
    return aStr;
  }
  if (idx === 0) {
    return aStr[idx];
  }

  return aStr[idx] + reverseStr(aStr, idx - 1);
}

let test = "annamai";

console.log(reverseStr(test));

// time complexity: O(n) where n is length of input string

// space complexity: O(n) where n is length of string. Call stack progressively gets more filled each call. Since
// strings are immutable in JS, new string is created in each call
