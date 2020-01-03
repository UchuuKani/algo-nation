const findClosestValueInBst = (tree, target) => {
  //variable to keep track of current closest value
  let closest = Infinity;

  //first node in tree
  let current = tree;

  //iterate while not at leaf nodes
  while (current) {
    let computedDiff = Math.abs(target - current.value);

    //if (current closest - target) is greater than (current value - target), set new closest as current value
    if (computedDiff < Math.abs(closest - target)) {
      closest = current.value;
    }
    //if target is less than current value, recurse left
    //since target is less than current, any value greater than current value will be
    //further away from the target
    if (target < current.value) {
      current = current.left;
    } 
    //if target is greater than current value, recurse right //since target is less than current, any value greater than current value will be
    //further away from the target
    else if (target > current.value) {
      current = current.right;
    } 
    //else, target is equal to current value and can stop iterating
    else {
      break;
    }
  }

  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }

    return this;
  }
}

const test1 = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500)

findClosestValueInBst(test1, 208);