class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// my solution, uses a set and performs dfs to find branch lengths for all leaf nodes
function isBalanced(treeRoot) {
  if (!treeRoot) {
    throw new Error();
  }

  var countSet = new Set();
  // Determine if the tree is superbalanced
  dfs(treeRoot, countSet);

  if (countSet.size > 2) {
    return false;
  }

  var setEntries = Array.from(countSet.entries());

  console.log(setEntries[0][0]);
  if (
    setEntries.length === 2 &&
    Math.abs(setEntries[0][0] - setEntries[1][1]) > 1
  ) {
    return false;
  }

  return true;
}

function dfs(node, setObj, count = 0) {
  if (node && !node.left && !node.right) {
    return setObj.add(count);
  }

  if (node.left) {
    dfs(node.left, setObj, count + 1);
  }

  if (node.right) {
    dfs(node.right, setObj, count + 1);
  }
}

// time complexity: O(n) where n is number of nodes in the tree. We must traverse every node to fully explore the tree and populate
// the set with values

// space complexity: worst case, O(b) where b is the number of distinct branch lengths present in our tree. Since the set has
// distinct entries, it only grows when unique branch lengths are added
