// LC challenge day 12
var lastStoneWeight = function (stones) {
  if (stones.length == 0) return 0;

  while (true) {
    // copying stones array is a linear time operation
    // finding max value of the stones array is a linear time operation as well
    // length of stones array is never changing, to "remove" values, we are setting elements in the array equal to 0
    var max1 = Math.max(...stones); // find the max value in the array

    if (max1 == 0) return 0; // if the max value is 0, means there are no greater values left and we return 0

    var idx1 = stones.indexOf(max1); // find the index of the largest element in the array
    stones[idx1] = 0; // "remove" the largest value from the array

    var max2 = Math.max(...stones); // find the second largest value in the array

    if (max2 == 0) return max1; // if the second largest element is 0 at this point, we did not hit the first condition checking for
    // a max value of 0, so the max value left in the array has to be the final non-zero stone weight

    // if we hit this point in the execution, means neither the largest value, nor the second largest value are equal to 0
    var idx2 = stones.indexOf(max2); // find the index of the second largest value in the array
    stones[idx2] = 0; // remove the second largest value in the array

    stones[idx2] = max1 - max2; // put the value calculated by taking the difference from the largest and second largest elements
    // in the array back in. Could either be inserted at idx1 or idx2
  }
};

// time complexity: Unsure of worst-case run time at the moment

// space complexity: O(1) since only variables are being reassigned
