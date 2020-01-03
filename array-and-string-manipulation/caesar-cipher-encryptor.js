function caesarCipherEncryptor(string, key) {
  //convert string chars to unicode, add key to unicode values - if key + unicode > z unicode value, take overflow and add
  //to first unicode int
  //"a" = 97, "z" = 122
  let cipherStr = "";
  const newKey = key % 26;

  for (let char of string) {
    let uniStr = char.charCodeAt(0) + newKey;

    if (uniStr > 122) {
      //case of overflow from newKey + unicode
      const newUni = 96 + (uniStr % 122);

      cipherStr += String.fromCharCode(newUni);
    }
    if (uniStr <= 122) {
      const stringRep = String.fromCharCode(uniStr);
      cipherStr += stringRep;
    }
  }

  return cipherStr;
}

// time complexity: O(n) where n is length of input string - only performing constant time operaitons in the for-of loop
// space complexity: O(n) since a new string is being created

console.log(caesarCipherEncryptor("xyz", 54)); //"zab"
