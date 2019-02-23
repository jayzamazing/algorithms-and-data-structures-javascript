/**
* 1.1 Is Unique: Implement an algorithm to determine if a string has
*all unique characters. What if you cannot use additional data structures?
* O(n^2)
*/
exports.default = (string) => {
  const length = string.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (string[i] === string[j]) {
       return false;
      }
    }
  }
  return true;
};
