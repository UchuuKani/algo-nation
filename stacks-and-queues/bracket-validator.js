function isValid(code) {
  if (code.length < 1) return true;
  
  var stack = [code[0]];
  // Determine if the input code is valid
  var openSymbols = {"(": ")", "[": "]", "{": "}"};
  var closedSymbols = {")": "(", "]": "[", "}": "{"};
  var topChar;
  
  for (let i = 1; i < code.length; i++) {
    const currentChar = code[i];
    
    if (stack.length > 0) {
      topChar = stack[stack.length - 1];
    } else {
      topChar = null;
    }
    // case that we are looking at opening character
    if (currentChar in openSymbols) {
      stack.push(currentChar);
    } else if (currentChar in closedSymbols) {
      if (closedSymbols[currentChar] == topChar) {
        stack.pop();
      } else stack.push(currentChar);
    }
    // case that we are looking at a a closing character
    
  }
  
  return stack.length == 0;
}

// time complexity: O(n) where n is length of input string. We loop through the entire input string to determine if anything is left in the stack
// space complexity: O(n) at worst where n is length of input string. Potentially, there could be no matching characters and the stack will contain as many as n elements

// more optimal solution where we break out sooner if invlaid match is found
function isValid(code) {
  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }
      const lastUnclosedOpener = openersStack.pop();

      // If this closer doesn't correspond to the most recently
      // seen unclosed opener, short-circuit, returning false
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}
