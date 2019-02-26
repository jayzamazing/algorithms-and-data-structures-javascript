'use strict';
/**
* 1.2 Check Permutation: Given two strings, write a method to
* decide if one is a permutation of the other.
*/
exports.default = (firstString, secondString) => {
  //check if the lengths are the same
  if (firstString.length !== secondString.length) {
    return false;
  } else {
    //take each string, turn into array, sort it and turn back into string
    let firstStringSorted = firstString.split('').sort().join('');
    let secondStringSorted = secondString.split('').sort().join('');
    //compare both strings
    return firstStringSorted === secondStringSorted;
  }
}
