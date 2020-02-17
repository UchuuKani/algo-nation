var RandomizedSet = function() {
  this.hashIdx = {};
  this.dataList = [];
};

RandomizedSet.prototype.insert = function(val) {
  if (this.hashIdx[val] === undefined) {
    this.hashIdx[val] = this.dataList.length;
    this.dataList.push(val);
    return true;
  } else {
    return false;
  }
};

RandomizedSet.prototype.remove = function(val) {
  if (this.hashIdx[val] !== undefined) {
    const removeIdx = this.hashIdx[val]; //idx of val to be removed
    const swappedEnd = this.dataList[this.dataList.length - 1];
    this.dataList[this.dataList.length - 1] = this.dataList[removeIdx];
    this.dataList[removeIdx] = swappedEnd;

    this.hashIdx[swappedEnd] = removeIdx;

    this.dataList.pop();

    delete this.hashIdx[val];
    return true;
  }
  return false;
};

RandomizedSet.prototype.getRandom = function() {
  const randomIdx = Math.floor(Math.random() * this.dataList.length);
  return this.dataList[randomIdx];
};

// time complexity: delete and getRandom operations will be constant time always. The getRandom method simply returns a random
// element in the array, and delete just pops off the last element in the array - no resizing. Maybe some ambiguity with the
// delete operation in the hash table, but will assume it will be a constant-time operation. The insert method may not always be
// constant time as arrays in javascript are dynamically allocated memory and will sometimes need to increase in size

// space complexity: O(n) space where n the number of elements added to the RandomizedSet
