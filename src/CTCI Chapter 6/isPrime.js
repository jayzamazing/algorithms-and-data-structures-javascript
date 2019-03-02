'use strict';
// This function checks to see if a number is prime or not

exports.default = (num) => {
  // check if num is less than 2
  if (num < 2) {
    return false;
  }
  //get the square root of the number to reduce the items we iterate over
  let sqrt = Math.sqrt(num);
  //iterate over all numbers between 0 and the square root
  for (let i = 2; i <= sqrt; i++) {
    //if the modulus of the i is 0
    if (num % i === 0) {
      return false;
    };
  }
  return true;
};
