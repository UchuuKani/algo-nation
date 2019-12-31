class MaxStack {
  constructor() {
    this.items = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    this.items.push(item);

    if (this.maxStack.peek() === null || item >= this.maxStack.peek()) {
      // if maxStack is empty or if item is >= last item in maxStack, push the item into maxStack
      this.maxStack.push(item);
    }
  }

  pop() {
    // saves value of last item in items stack
    const poppedItem = this.items.pop();

    if (poppedItem === this.maxStack.peek()) {
      // if item that was popped off equals last item in maxStack, pop off from maxStack as well
      this.maxStack.pop();
    }

    return poppedItem;
  }

  getMax() {
    // return the last element in maxStack
    return this.maxStack.peek();
  }
}

// time complexity: O(1) time for pop, push and peek.
// space complexity: O(m) space where m is the operations performed on stack

// given by Cake
class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}
