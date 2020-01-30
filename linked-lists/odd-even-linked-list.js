var oddEvenList = function(head) {
  if (!head || !head.next) {
    //empty or one element list
    return head;
  } else if (head.next) {
    if (!head.next.next) {
      //two element list
      return head;
    }
  }

  const firstEven = head.next;
  let current = head;
  let temp = null;

  while (current.next) {
    if (!current.next.next) {
      break;
    }
    temp = current.next;
    current.next = temp.next;

    if (current.next) {
      temp.next = current.next.next;
    }

    current = current.next;
  }

  current.next = firstEven;

  return head;
};

// time complexity: O(n) where n is the length of the list. Have to traverse the majority of the list before breaking out of the
// while loop

//space complexity: O(1) since no additional data structures are used, only variables referencing a single node at a time
