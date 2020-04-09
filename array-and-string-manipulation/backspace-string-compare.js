// LC April 2020 contest day 9 - my solution using stacks to track changes to the strings
var backspaceCompare = function (S, T) {
  var stackS = [];
  var stackT = [];

  for (let i = 0; i < S.length; i++) {
    let curr = S[i];

    if (curr === "#" && stackS.length > 0) {
      stackS.pop();
    } else {
      if (curr !== "#") stackS.push(curr);
    }
  }

  var processedS = stackS.join("");

  for (let i = 0; i < T.length; i++) {
    let curr = T[i];

    if (curr === "#" && stackT.length > 0) {
      stackT.pop();
    } else {
      if (curr !== "#") stackT.push(curr);
    }
  }

  var processedT = stackT.join("");

  return processedS === processedT;
};

// time complexity: O(M + N) where M and N are the lengths of S and T
// space complexity: O(M + N) where M and N are the lengths of S and T
