// LC # 100

function isSameTree(p, q) {
  if (!p || !q) {
    if ((!p && q) || (p && !q)) {
      return false;
    }

    return true;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// time: O(n) where n is number of nodes present in the larger tree since need to check every node in both trees to make sure they're
// a complete match

// space: O(d) where d where d is max depth of the tree
