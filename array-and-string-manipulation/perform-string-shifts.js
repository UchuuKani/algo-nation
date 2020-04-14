// LeetCode April challenge day 14

// idea here is to turn the string into an array for easier manipulation and process each [direction, amount] element in the shift array
// if shifting left, we call leftShift, and if shifting right, we call rightShift to handle the operation
// both functions take in the str[] to shift as well as the amount to shift by modded by the length of the string
// if amount is less than length, we shift by the length
// if amount is equal to the length, we don't shift at all
// if amount is greater than the length, we use the remainder from amount % length to determine how much to shift by
// return the completely shifted array and join it into a string
var stringShift = function(s, shift) {
    var splitStr = s.split("");
    
    for (el of shift) {
        let [direction, amount] = el;
        
        if (direction == 0) { // shift left
            leftShift(splitStr, amount % s.length);
        } else {
            rightShift(splitStr, amount % s.length);
        }
    }
    
    return splitStr.join("");
};

function leftShift(strArr, amount) {
    while (amount > 0) {
        let headChar = strArr.shift();
        strArr.push(headChar);
        amount--;
    }
    
    return null;
}

function rightShift(strArr, amount) {
    while (amount > 0) {
        let tailChar = strArr.pop();
        strArr.unshift(tailChar);
        amount--;
    }
    
    return null;
}

// considerations to improve: both the shift and unshift methods used in the leftShift and rightShift functions will cause a re-index of our array which could be costly
// the problem constrains input string length to be between 1 and 100 so overall wouldn't become terribly slow with that constraint
// could potentially use a linked list so that re-indexing would not occur in our while loop, and instead we could move the head or tail of the list to either end without worrying
// about the re-indexing

// time complexity: O(n * m) where n is the length of the input string, and m is the length of the input matrix. We iterate over the length of the matrix to perform each operation
// for each operation, we iterate in a while loop at most by (string.length - 1) amount of times due to the modulus operation. Worst case, we iterate over the m elements in
// the shift array, and for each shift, we iterate at most (string.length - 1) times, giving O(n * m) time complexity in the worst case 

// space complexity: O(n) as we maintain an array equal to the size of the input string
