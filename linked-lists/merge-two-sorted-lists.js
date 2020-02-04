function ListNode(value) {
  this.value = value;
  this.next = null;
}

//LC # 21
var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      //l1 node less than l2 node
      current.next = l1;
      l1 = l1.next;
      current = current.next;
    } else {
      current.next = l2;
      l2 = l2.next;
      current = current.next;
    }
  }

  if (!l1) {
    current.next = l2;
  } else {
    current.next = l1;
  }

  return dummy.next;
};

// time complexity: O(n + m) where n and m are lengths of lists. If we alternate grabbing nodes from each list at each
// iteration, would have to iterate through almost entirety of combined list length. Could potentially only need to
// iterate through one list before ever needing to add nodes from the other list, in which case would iterate over the length of
// the shorter list

// space complexity: O(1) space maintained by only reassigning variables
