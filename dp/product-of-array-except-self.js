// https://leetcode.com/problems/product-of-array-except-self/

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to
// the product of all the elements of nums except nums[i].

function productExceptSelf(intArray) {
  if (intArray.length <= 1) {
    throw new Error()
  }
  // Make a list of the products
  const leftArr = [1];
  
  for (let i = 1; i < intArray.length; i++) {
    leftArr[i] = leftArr[i - 1] * intArray[i - 1];
  }
  
  let currentProduct = 1;
  
  for (let j = intArray.length - 1; j >= 0; j--) {
    leftArr[j] *= currentProduct;
    currentProduct *= intArray[j];
  }
  
  return leftArr;
}

console.log("expect input of [1,2,3,4] to output [24,12,8,6]: equals ", productExceptSelf([1,2,3,4]));
console.log("one zero should product all zeros except self: [0, 0, 36, 0] equals ", productExceptSelf([6, 2, 0, 3]));
console.log("two zeroes should produce an array of all zeros: [0, 0, 0, 0, 0] equals ", productExceptSelf([4, 0, 9, 1, 0]));
console.log("handles one negative integer: [32, -12, -24] equals ", productExceptSelf([-3, 8, 4]));
console.log("handles all negative integers: [-8, -56, -14, -28] equals ", productExceptSelf([-7, -1, -4, -2]));
