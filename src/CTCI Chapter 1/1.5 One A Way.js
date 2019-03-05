'use strict';
/**
* 1.5 One Away: There are three types of edits that can be
* performed on strings: insert a character, remove a character,
* or replace a character. Given two strings, write a function
* to check if they are one edit (or zero edits) away.
* EXAMPLE
* pale, ple -> true
* pales, pale -> true
* pale, bale -> true
* pale, bake -> false
*/

exports.default = (str1, str2) => {
  let differences = 0;
  //check if the difference of the length
  if (str1.length - str2.length > 1) {
    return false;
  }
  //get the length of the longest string
  let length = str1.length > str2.length ? str1.length : str2.length;
  //iterate through both strings
  for (let i = 0, j = 0; i < length; i++, j++) {
    //if the character of the string of a given instance is different
    //from the other string
    if (str1.charAt(i) !== str2.charAt(j)) {
      //increment differences variable
      differences++;
      //if there is more than one difference
      if (differences > 1) {
        //not within one edit away so return false
        return false;
      }
      //chech if the first string next index is the same as the current
      //value of the other string current indes
      if (str1.charAt(i + 1) === str2.charAt(j)) {
        //increment the first string once here and again on loop iteration
        i++;
      } else if (str1.charAt(i) === str2.charAt(j + 1)) {
        //increment the other index and again on loop iteration
        j++;
      }
    }
  }
  return true;
};
