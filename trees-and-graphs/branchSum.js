// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

//this solution uses a recursive helper function that mutates an array declared in scope of main function
//TODO: solve this without mutating an array in outer scope
function branchSums(root) {
  const sumsArr = [];
	helper(root, 0, sumsArr); //call recursive function that populates sumsArr;
	return sumsArr;
}

function helper(node, runningSum, sums) {
	if (!node) { //if we recurse past a leaf node, just return out of the function
		return; //accounts for case where parent of a leaf node only has one child, e.g. not balanced at that node
	}
	
	const newRunningSum = runningSum + node.value; //add current value to current running sum
	
	if (!node.left && !node.right) { //case where we are at a leaf node
		sums.push(newRunningSum); //push final sum for that branch into sums array
		return null; //return null value to indicate a mutation
	}
	
	helper(node.left, newRunningSum, sums); //if not at leaf, recurse left
	helper(node.right, newRunningSum, sums); //if not at leaf, recurse right
}

{
  const tree = new BinaryTree(1);

  console.log(`${branchSums(tree)} should equal [1]`);
}

{
  const tree = new BinaryTree(1).insert([2]);
  
  console.log(`${branchSums(tree)} should equal [3]`);
}

{
  const tree = new BinaryTree(1).insert([2, 3]);

  console.log(`${branchSums(tree)} should equal [3, 4]`);
}

{
  const tree = new BinaryTree(1).insert([2, 3, 4, 5]);

  console.log(`${branchSums(tree)} should equal [7, 8, 4]`);
}

{
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

  console.log(`${branchSums(tree)} should equal [15, 16, 18, 10, 11]`);
}

{
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1]);

  console.log(`${branchSums(tree)} should equal [15, 16, 18, 9, 11, 11, 11]`);
}

{
  const tree = new BinaryTree(0);
  tree.left = new BinaryTree(1);
  tree.left.left = new BinaryTree(10);
  tree.left.left.left = new BinaryTree(100);

  console.log(`${branchSums(tree)} should equal [111]`);
}

{
  const tree = new BinaryTree(0);
  tree.right = new BinaryTree(1);
  tree.right.right = new BinaryTree(10);
  tree.right.right.right = new BinaryTree(100);

  console.log(`${branchSums(tree)} should equal [111]`);
}

{
  const tree = new BinaryTree(0);
  tree.left = new BinaryTree(9);
  tree.right = new BinaryTree(1);
  tree.right.left = new BinaryTree(15);
  tree.right.right = new BinaryTree(10);
  tree.right.right.left = new BinaryTree(100);
  tree.right.right.right = new BinaryTree(200);

  console.log(`${branchSums(tree)} should equal [9, 16, 111, 211]`);
}



