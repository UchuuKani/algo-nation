function isBinarySearchTree(treeRoot) {
  //create stack of objects, each object has keys for node, lowerBound and upperBound
  //pop items off stack and check if the node has a left and a right
  //if current node's value is out of bounds, return false
  //if there is a left, add to the stack with same lowerBound, different upperBound set to current node's value
  //if there is a right, add to the stack with same upperBound, different lowerBound set to current node's value
  let nodeStack = [
    {
      node: treeRoot,
      lowerBound: -Infinity,
      upperBound: Infinity
    }
  ];

  while (nodeStack.length) {
    //while there are items in the stack
    let { node, lowerBound, upperBound } = nodeStack.pop(); //pop off top item and save to current

    if (node.value >= upperBound || node.value <= lowerBound) {
      return false;
    }

    if (node.left) {
      nodeStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      });
    }

    if (node.right) {
      nodeStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      });
    }
  }

  return true;
}

function recursiveIsBST(root, lower, upper) {
  if (!lower) {
    lower = -Infinity;
  }
  if (!upper) {
    upper = Infinity;
  }

  if (!root) {
    //if the root is null, means we can't recurse further
    return true;
  }

  if (root.value >= upper || root.value <= lower) {
    return false;
  }

  return (
    recursiveIsBST(root.left, lower, root.value) && //explore left sub-tree, any false values will propagate through and
    //second expression exploring right will not evaluate
    recursiveIsBST(root.right, root.value, upper) //explore right sub-tree, any false values will propagate and return
    //false from this expression
  );
}

// time complexity: O(n) time since all nodes must be visited
// space complexity: O(d) space where d is the height of the BST. Alternatively, d relates to n (number of nodes)
// in that a balanced binary tree has the relation d = log2(n) and the less balanced the tree, the closer d is to n.
// worst case space is a tree with all right children extending from the root where each child has a left child which will
// be added to the stack on every iteration. By the time traversal to the last right child has ended, there will
// be 1/2*n nodes in the stack, resolving to O(n) space at worst
// recursive solution may have stack overflow if input binary tree has a large depth

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

{
  let treeRootOne = new BinaryTreeNode(50);
  let leftNode = treeRootOne.insertLeft(30);
  leftNode.insertLeft(10);
  leftNode.insertRight(40);
  let rightNode = treeRootOne.insertRight(70);
  rightNode.insertLeft(60);
  rightNode.insertRight(80);

  console.log(isBinarySearchTree(treeRootOne));
}
