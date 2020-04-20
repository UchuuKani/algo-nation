function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    
    for (let i = 1; i < preorder.length; i++) {
        insertTree(root, preorder[i]);
    }
    
    return root;
};

function insertTree(root, val) {
    if (root.val > val) {
        if (!root.left) {
            root.left = new TreeNode(val);
            return;
        } else {
            insertTree(root.left, val);
        }
    } else {
        if (!root.right) {
            root.right = new TreeNode(val);
            return;
        } else {
            insertTree(root.right, val);
        }
    }
}

// time complexity: O(n * log n) time where n is the number of nodes in the tree. For a preorder array that would produce a relatively balanced tree, an insert is O(log n) time and we insert n times into the tree. In the worst case, preorder is a sorted array so our inserts would take n time roughly and overall time complexity would be O(n^2)

// space complexity: O(n) where n the length of the input preorder array. We are created a BST which holds n nodes, so n space. 
