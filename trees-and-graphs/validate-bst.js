function isBinarySearchTree(treeRoot) {
  // Determine if the tree is a valid binary search tree

  return false;
}

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
}
