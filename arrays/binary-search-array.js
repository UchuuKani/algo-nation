//Write a function that takes in a sorted array of integers as well as a target integer. The function should use the binary
//search algorithm to find if the target number is contained in the array and should return its index if it is, otherwise -1.

function binarySearch(array, target) {
  let floor = 0;
	let ceiling = array.length;
	
	while (floor <= ceiling) {
		let midpoint = Math.floor((floor + ceiling) / 2);
		let current = array[midpoint];
		
		if (current === target) return midpoint;
		else if (current < target) {
			floor = midpoint + 1;
		} else {
			ceiling = midpoint - 1;
		}
	}
	
	return -1;
}