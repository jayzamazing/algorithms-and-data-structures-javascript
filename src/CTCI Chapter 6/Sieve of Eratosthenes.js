'use strict';

/** Function generates a list of prime numbers by recognizing that all non-prime
* numbers are divisible by a prime number
*/

exports.default = (max) => {
  //make an array using max for the length and fill with true
  const sieve = new Array(max).fill(true);
  //iterate over square root of max
  for (let i = 2; i < Math.sqrt(max); i++) {
    //if number is prime
    if (sieve[i]) {
      //iterate starting at i^2 marking multiples of i not prime
      for (let j = Math.pow(i, 2); j < max; j+= i) {
        sieve[j] = false;
      }
    }
  }
  //reduce array returning only indexes that are true
  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime && i > 1) {
      primes.push(i);
    }
    return primes;
  }, []);
};
