// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National
// Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off
// the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a
// mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

// LeetCode # 151 working solution
var reverseWords = function(s) {
  const trimmedStr = s.trim();
  const splitVersion = trimmedStr.split(" ");
  const processedArr = [];

  for (const word of splitVersion) {
    if (word !== "") {
      processedArr.push(word);
    }
  }

  return processedArr.reverse().join(" ");
};

// time complexity: O(n) where n is length of the input string
// space complexity: O(n) where n is length of input string. Creates array representations of the string in various stages
// of processing

let desc = "one word";
let input = "vault".split("");
reverseWords(input);
let actual = input.join("");
let expected = "vault";
assertEqual(actual, expected, desc);

desc = "two words";
input = "thief cake".split("");
reverseWords(input);
actual = input.join("");
expected = "cake thief";
assertEqual(actual, expected, desc);

desc = "three words";
input = "one another get".split("");
reverseWords(input);
actual = input.join("");
expected = "get another one";
assertEqual(actual, expected, desc);

desc = "multiple words same length";
input = "rat the ate cat the".split("");
reverseWords(input);
actual = input.join("");
expected = "the cat ate the rat";
assertEqual(actual, expected, desc);

desc = "multiple words different lengths";
input = "yummy is cake bundt chocolate".split("");
reverseWords(input);
actual = input.join("");
expected = "chocolate bundt cake is yummy";
assertEqual(actual, expected, desc);

desc = "empty string";
input = "".split("");
reverseWords(input);
actual = input.join("");
expected = "";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
