// Write a function to find the 2nd largest element in a binary search tree. 

//example binary tree node class
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
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

//function to find largest node in a BST
function findLargest(treeRoot) {
  if (!treeRoot) return null;
  
  if (treeRoot.right) {
    return findLargest(treeRoot.right);
  }
  return treeRoot.value;
}


//utilizes above helper to find second largest element
//case for if the largest node has no left child or left subtree, and if it does (find the max of that subtree)
function findSecondLargest(treeRoot) {
  if (!treeRoot.right && treeRoot.left) {
    return findLargest(treeRoot.left);
  } else if (treeRoot.right && !treeRoot.right.right && !treeRoot.right.left) {
    return treeRoot.value;
  }
  
  return findSecondLargest(treeRoot.right);
}