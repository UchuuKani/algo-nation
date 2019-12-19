function productSum(array, coefficient = 1, nesting = 1) {
  //return some new array with algebraic operations performed
  let runningSum = 0;

  for (const element of array) {
    if (Array.isArray(element)) {
      const newNesting = nesting + 1;
      const newCoefficient = coefficient * newNesting;

      runningSum += productSum(element, newCoefficient, newNesting);
    } else {
      runningSum += (element * coefficient);
    }
  }

  return runningSum;
}




