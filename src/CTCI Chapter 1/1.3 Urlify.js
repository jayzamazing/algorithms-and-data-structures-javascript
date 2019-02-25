'use strict';
/**
* 1.3 URLify: Write a method to replace all spaces in a string with '%20'.
* You may assume that the string has sufficient space at the end to hold the
* additional characters, and that you are given the "true" length of the
* string.
* EXAMPLE
* Input: "Mr John Smith    ", 13
* Output: "Mr%20John%20Smith"
*/

exports.default = (str, length) => {
  //split the string into an array
  let strArr = str.split('');
  //iterate over the array
  for (let i = 0; i < length; i++) {
    //check if there is an empty space
    if (strArr[i] === ' ') {
      //replace with the following string
      strArr[i] = '%20';
    }
  }
  //turn it back to a string, removing spaces past string length
  return strArr.join('').trim();
};
