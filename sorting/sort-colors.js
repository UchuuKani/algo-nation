// https://www.youtube.com/watch?v=uvB-Ns_TVis - one solution

// this problem apparently testing for quick sort and count sort?

// example: [2,0,2,1,1,0] => [0,0,1,1,2,2]

function sortColorsOnePass(nums) {
  if (nums.length <= 1) return; // already sorted if length is 1 or 0

  var start = 0; // index which we will add 0s at
  var end = nums.length - 1; // index which we will add 2s at
  var idx = 0; // index of current element

  // second condition used in video, but LC solution doesn't need it in order to pass
  while (idx <= end && start < end) {
    // idea is if current num is a 0, swap it to where the next 0 should go, position at start and start idx should shift right
    // if current is a 2, swap it to where next 2 should go, position at end and end idx should shift left
    // if current is a 1, keep it in same position and just advance idx pointer
    if (nums[idx == 0]) {
      // when current is 0, swap current and element at start idx, and set element at start equal to 0
      // advance both start and idx pointers
      nums[idx] = nums[start];
      nums[start] = 0;
      start++;
      idx++;
    } else if (nums[idx] == 2) {
      // don't advance idx pointer because we don't know what element at last index could be - might be a 2, 0, or 1
      // so don't want to increment idx bc we want to do another iteration and check what we swapped
      // we want to make sure the element we swapped in from the end belongs in the middle of the array
      // say we swap a 0 from the end, then a 0 would be in the middle - that 0 should still be moved to the beginning of the array
      // so don't want to increment idx
      nums[idx] = nums[end];
      nums[end] = 2;
      end--;
    } else {
      idx++;
    }
  }
}

function sortColorsTwoPass(nums) {
  var countZero = 0;
  var countOne = 0;
  var countTwo = 0;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current == 0) countZero++;
    if (current == 1) countOne++;
    if (current == 2) countTwo++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < countZero) nums[i] = 0;
    else if (i < countZero + countOne) nums[i] = 1;
    else nums[i] = 2;
  }
}
