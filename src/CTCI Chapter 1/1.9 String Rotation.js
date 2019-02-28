'use strict';

/**
* 1.9 String Rotation: Assume you have a method isSubstring which checks
* if one word is a substring of another . Given two strings, s1 and
* s2, write code to check if s2 is a rotation of sl using only one
* call to isSubstring (e.g., "waterbottle"is a rotation of "erbottlewat ").
*/

exports.default = (str1, str2) => {
  //check if str1 and str2 are valid and have the same length
  if (!str1 || ! str2 || typeof str1 != 'string' || typeof str2 != 'string'
      || str1.length !== str2.length) {
    return false;
  }
  //double the first string and see if it includes the second string
  return (str1 + str1).includes(str2);
}
