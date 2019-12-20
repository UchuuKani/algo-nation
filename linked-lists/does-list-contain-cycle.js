function containsCycle(firstNode) { //takes head of a linked list as input and returns boolean as output
  let fastRunner = firstNode;
  let slowRunner = firstNode;
  
  if (firstNode && firstNode.next) { 
    while (fastRunner && slowRunner) {
      fastRunner = fastRunner.next.next;
      slowRunner = slowRunner.next;
      
      if (fastRunner === slowRunner) {
        return true;
      }
    }
  }
  
  return false;
}

// time complexity: O(n) - need to traverse entire list to be able to determine that a cycle does not begin. A cycle could
// start at the end of the list, so must be checked all the way through. Only constant time operations in body of the
// while loop

// space complexity: O(1) - no additional data structures required, only reassignment of two variables, fastRunner and
// slowRunner

function containsCycle(firstNode) {
  let current = firstNode;
  const listSet = new Set();
  
  while (current) {
    if (listSet.has(current)) {
      return true;
    }
    
    listSet.add(current);
    
    current = current.next;
  }
  
  return false;
}

// time complexity: O(n) - in this case, still just traversing the linked list and performing constant time operations
// space complexity: O(n) - creating a new set to hold previously visited nodes, so size of set grows with size of input

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



