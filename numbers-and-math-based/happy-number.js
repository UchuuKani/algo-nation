// LC # 202
var isHappy = function(n) {
  var happy = n;
  var seen = {};

  while (happy !== 1) {
    if (seen[happy] !== undefined) {
      return false;
    } else {
      seen[happy] = happy;
      happy = happyHelper(happy);
    }
  }

  return true;
};

// performs the calculation for the next number
function happyHelper(num) {
  // number ->  number // n time operation where n is length of number
  var stringRep = num.toString(); // number as a string

  var reduceArr = [];

  for (let int of stringRep) {
    reduceArr.push(Math.pow(parseInt(int), 2));
  }

  return reduceArr.reduce((a, b) => a + b);
}
