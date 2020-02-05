// input is tree of nodes, rather than an array

function maxDepth(root, prevVal = 0) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return prevVal + 1;
  }

  if (root.left || root.right) {
    const leftVal = maxDepth(root.left, prevVal + 1);
    const rightVal = maxDepth(root.right, prevVal + 1);

    return Math.max(leftVal, rightVal);
  }
}

// time complexity: O(n) where n is number of nodes in tree. We're doing DFS to visit the deepest node in the tree, and have to
// visit all n nodes to make sure that leaves are being hit

// space complexity: O(h) where h is max depth of tree. At worst, might be O(n) if the tree is effectively a linked list but
// space is closer to h the closer the tree is to being balanced
