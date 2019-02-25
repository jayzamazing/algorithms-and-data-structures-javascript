'use strict';
/**
* 1.1 Is Unique: Implement an algorithm to determine if a string has
*all unique characters. What if you cannot use additional data structures?
* O(n^2)
*/
exports.default = (string) => {
  //get the length
  const length = string.length;
  //iterate over the string, character by character,
  //first loop looks at n, second at n + 1
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      //check if current character equals the next one
      if (string[i] === string[j]) {
       return false;
      }
    }
  }
  return true;
};
