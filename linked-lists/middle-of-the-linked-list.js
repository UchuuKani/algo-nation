// LC April 2020 Week 2, Day 1 challenge
var middleNode = function (head) {
  var count = 0;
  var countHash = {};

  var current = head;

  while (current !== null) {
    count++;
    countHash[count] = current;
    current = current.next;
  }

  if (count % 2 === 0) {
    return countHash[count / 2 + 1];
  } else {
    return countHash[Math.ceil(count / 2)];
  }
};

// time complexity: O(n) where n is length of input list. We iterate through the entire list to fill the hash table
// space complexity: O(n) where n is length of the input list. We create an entry for every node from the list in the hash table

// another more space-efficient approach involves use of two pointers, one fast and one slow. The fast pointer moves at twice the
// "speed" as the slow pointer, so when the fast pointer reaches the end of the list, the slow pointer will be at the halfway point

function middleNodePointers(head) {
  var fast = head;
  var slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// 1 -> 2 -> 3 -> 4 -> 5
// in this case, fast and slow will both point to 1 at first then:
// 1.) fast -> 3, slow -> 2
// 2.) fast -> 5, slow -> 3
// while loop terminates since fast.next = null
// node that slow is pointing at (3) is returned

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// in this case, fast and slow will both point to 1 at first then:
// 1.) fast -> 3, slow -> 2
// 2.) fast -> 5, slow -> 3
// 3.) fast -> null, slow -> 4
// node that slow is pointing at (4) is returned

// time complexity: O(n) to iterate through the entire list. The fast pointer moves at two nodes per iteration
// space complexity: O(1) since pointers are only being reassigned
