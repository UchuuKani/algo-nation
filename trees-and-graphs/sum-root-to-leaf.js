function sumRootToLeaf(root) {
  const binaryNumArr = [];
  helper(root, "0", binaryNumArr);

  return binaryNumArr.reduce((acc, curr) => {
    return acc + parseInt(curr, 2);
  }, 0);
}

function helper(node, strBinRep, containerArr) {
  if (node) {
    if (!node.left && !node.right) {
      containerArr.push(strBinRep + node.val); //coerced with str + number
    } else {
      helper(node.left, strBinRep + node.val, containerArr);
      helper(node.right, strBinRep + node.val, containerArr);
    }
  }
}

// time complexity: O(n) time where n is number of nodes in the tree. Need to visit all nodes in the helper function to populate
// the binaryNumArr. The reduce call runs m number of times where m is the number of leaf nodes in the tree, but is most likely
// going to be smaller than n

// space complexity: O(h) space for the helper function to excute on the call stack where h is the deepest level in the tree. In
// the case of a lopsided tree, could be O(n) at worst. The binaryNumArr holds m elements where m is the number of branches
// in the tree. Overall, O(n) space at worst
