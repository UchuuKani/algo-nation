const shakes = [[5, 6], [2, 8], [1, 2], [3, 4], [4, 6]]; //=> 4
const more = [[5,6], [2,8], [1,2], [30, 40], [1,2]]; //=> 4

const sorted = [ [1, 2], [2, 8], [3, 4], [4, 6], [5, 6] ];
const plz = [ [1, 2], [1, 2], [2, 8], [5, 6], [30, 40] ];

//O(n^2) time, O(m) space where m is the largest value in the shakes array
//possible to do this in O(n log n) time, and I believe O(1) or O(n) space
const countHelper = countArray => {
  let maxLen = 0;
  
  for (const arr of countArray) {
    if (arr[1] > maxLen) {
      maxLen = arr[1];
    }
  }

  const dpArr = new Array(maxLen + 1);
  dpArr.fill(1);
  dpArr[0] = null;

  return dpArr;
}

const numShakes = shakeArr => {
  const peopleShakes = countHelper(shakeArr);
  
  for (const person of shakeArr) {

    for (let i = person[0]; i <= person[1]; i++) {
      peopleShakes[i] += 1;
    }

  }
  
  return Math.max(...peopleShakes);
}

console.log(numShakes(shakes));