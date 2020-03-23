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
// implemented using an external helper that adds branch length to a set whenever a leaf node is reached
function isBalanced(treeRoot) {
  if (!treeRoot) {
    return true;
  }

  var countSet = new Set();
  // Determine if the tree is superbalanced
  dfs(treeRoot, countSet);

  if (countSet.size > 2) {
    return false;
  }

  var setEntries = Array.from(countSet.entries());

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
// distinct entries, it only grows when unique branch lengths are added. Another worst-case scenario where b would be equal to 1
// is the case where the tree is effectively a linked list, and the call stack grows proportional to the number of nodes, n, so
// O(n) is another potential worst-case for space

//
//

// more optimal solution
function isBalancedOpt(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}
