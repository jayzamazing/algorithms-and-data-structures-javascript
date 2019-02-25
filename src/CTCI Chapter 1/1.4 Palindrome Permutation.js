/**
* 1.4 Palindrome Permutation: Given a string, write a function to
* check if it is a permutation of a palin drome. A palindrome is a
* word or phrase that is the same forwards and backwards. A permutation
* is a rearrangement of letters. The palindrome does not need to be
* limited to just dictionary words.
* EXAMPLE
* Input: Tact Coa
* Output: True (permutations: "taco cat", "atco eta", etc . )
*/

exports.default = (str) => {
  //object to store keys and values - a: 2
  let chars = {};
  //split into array and iterate over each item in array
  str.split('').forEach((char) => {
    //as long as array item is not a space
    if (char === ' ') {
      return;
    }
    //lower case
    let charLower = char.toLowerCase();
    //check if char already exists in map
    if (chars[charLower]) {
      //delete char from map
      delete chars[charLower];
    } else {
      //add char to map
      chars[charLower] = true;
    }
  });
  //if chars count is even
  if (chars.length % 2 === 0) {
    return Object.keys(chars).length === 0;
  //otherwise count is odd
  } else {
    return Object.keys(chars).length === 1;
  }
}
