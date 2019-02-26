'use strict';
/**
* 1.6 String Compression: Implement a method to perform basic string
* compression using the counts of repeated characters. For example,
* the string aabcccccaaa would become a2b1c5a3. If the "compressed"
* string would not become smaller than the original string, your
* method should return the original string. You can assume the string
* has only uppercase and lowercase letters (a - z).
*/

exports.default = (str) => {
  let count = 1;
  let newStr = '';
  //iterate over string
  for (let i = 0; i < str.length; i++) {
    //if the current char equals the next char
    if (str[i] === str[i + 1]) {
      //increment the counter
      count++;
    } else {
      //append the current char with the count to the compressed string
      newStr += str[i] + count;
      //reset counter
      count = 1;
    }
  }
  //check if the length of the new string is less than the old String
  //if it is then return the new string, otherwise return the old string
  return newStr.length < str.length ? newStr : str;
};
