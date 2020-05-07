// solution for LC May 2020 challenge, day 7
// uses dfs to iterate through all nodes in the tree
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isCousins = function (root, x, y) {
  var hashTable = {};
  hashTable[root] = [0, null];

  dfs(root, 1, root, hashTable);

  if (hashTable[x][1] == hashTable[y][1]) return false;
  else return hashTable[x][0] == hashTable[y][0];
};

function dfs(node, level, parent, lookup) {
  if (node == null) return;

  if (!(node.val in lookup)) {
    lookup[node.val] = [level, parent];
  }

  dfs(node.left, level + 1, node.val, lookup);
  dfs(node.right, level + 1, node.val, lookup);
}

// time complexity: O(n) where n is the number of nodes in the binary tree. We perform a dfs that visits every node once
// space complexity: O(n) where n is number of nodes. The hash table will have one entry for every node (which is O(n)) and
// at most, there will be n frames on the call stack at any one time if the tree is effectively a linked list
