function findThreeLargestNumbers(array) {
  const largestArr = [];
  largestArr[2] = -Infinity;
  largestArr[1] = -Infinity;
  largestArr[0] = -Infinity;

  for (const number of array) {
    if (number > largestArr[2]) {
      const tempLarge = largestArr[2];
      const tempMid = largestArr[1];

      largestArr[2] = number;
      largestArr[1] = tempLarge;
      largestArr[0] = tempMid;
    } else if (number > largestArr[1]) {
      const tempMid = largestArr[1];
      largestArr[1] = number;
      largestArr[0] = tempMid;
    } else if (number > largestArr[0]) {
      largestArr[0] = number;
    }
  }

  return largestArr;
}

// time complexity: O(n) - iterates once through entire array, and only constant time operations performed in body of loop
// space complexity: O(1) - new array created, but will at most have a length of three

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])); //[18, 141, 541]


function naiveFindThreeLargestNumbers(array) {
	let largestIdx = 0, middleIdx = 0, smallestIdx = 0;
	let currentLargest = -Infinity;
	const largestArr = [];
	
	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		
		if (current >= currentLargest) {
			currentLargest = current;
			largestIdx = i;
		}
	}
	
	largestArr.unshift(currentLargest);
	currentLargest = -Infinity;
	
	for (let j = 0; j < array.length; j++) {
		if (j === largestIdx) {
			continue;
		}
		
		const current = array[j];
		
		if (current >= currentLargest) {
			currentLargest = current;
			middleIdx = j;
		}
	}
	
	largestArr.unshift(currentLargest);
	currentLargest = -Infinity;
	
	for (let k = 0; k < array.length; k++) {
		if (k === largestIdx || k === middleIdx) {
			continue;
		}
		
		const current = array[k];
		
		if (current >= currentLargest) {
			currentLargest = current;
			smallestIdx = k;
		}
	}
	
	largestArr.unshift(currentLargest);
	
	return largestArr;
}