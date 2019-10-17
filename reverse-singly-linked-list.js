// https://www.hackerrank.com/challenges/reverse-a-linked-list

// You’re given the pointer to the head node of a linked list. Change the next
// pointers of the nodes so that their order is reversed. The head pointer given
// may be null meaning that the initial list is empty.

function reverse(head) {
  let current = head;
  let prev = null; 
  let next = current.next;

  while (current.next) { 
      current.next = prev;
      prev = current; 
      current = next; 
      next = next.next;

  }

  current.next = prev;
  return current;
}