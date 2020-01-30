var minFallingPathSum = function(A) {
    for (let i = 1; i < A.length; i++) { //skipping first row, start at 2nd row and go to last
        for (let j = 0; j < A[0].length; j++) {
            //inner loop where mutations in current row will happen
            const currentInt = A[i][j]; //current element in current row
            
            //set current value equal to the minimum of possible values from the row above (at i - 1)
            if (j === 0) { //first column -> only row above, and row at upper right are valid
                A[i][j] = Math.min(A[i - 1][j], A[i - 1][j + 1]) + currentInt;
            } else if (j === A[0].length - 1) {
                //last column -> only row above, and row at upper left are valid
                A[i][j] = Math.min(A[i - 1][j], A[i - 1][j - 1]) + currentInt;
            } else { //inner columns -> upper left, above, upper right are valid
                A[i][j] = Math.min(A[i - 1][j - 1], A[i - 1][j], A[i - 1][j + 1]) + currentInt;
            }
        }
    }
    
    return Math.min(...A[A.length - 1]);
};


console.log(minFallingPathSum([[1, 2, 3], [4, 5, 6]]));
// time complexity: O(n^2) where n is the size of the square matrix. For every row starting from the second, we are traversing through it
// and computing its value based on the row above. For every call to Math.min, a constant (3) number of arguments is supplied so it 
// may be treated as a constant time operation.

// space complexity: O(1) additional space since we are mutating the input in place
