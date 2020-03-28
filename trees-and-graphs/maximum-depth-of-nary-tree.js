// LC # 559 - Maximum Depth of Nary Tree
// my approach, time not great
var maxDepth = function(root) {
  if (!root) return 0;

  var depthsArr = [];

  dfsNary(root, depthsArr); // fills depthsArr with all branch depths in tree

  return Math.max(...depthsArr); // iterates over length of depthsArr and returns max
};

function dfsNary(root, leafArr, depth = 1) {
  if (root.children.length === 0) {
    leafArr.push(depth); // leaf node has no children, when we reach one we push its depth into array and return

    return;
  }
  // else we dfs on children
  for (let child of root.children) {
    dfsNary(child, leafArr, depth + 1);
  }
}

// time complexity: we visit every node just once to make sure we haven't missed a branch. O(n) time where n is number of nodes in
// the tree. Regardless of shape (e.g. a linked list) still traverse every node

// space complexity: space is taken up both by depthsArr being filled by b number of branches, and also from call stack maintained
// while recursing through tree. Largest the call stack would get is the case when the tree is a linked list, and at that point
// the depthsArr will be at its smallest

//
//
//

// sample solution that is faster than mine
var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};
