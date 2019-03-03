'use strict';

const chai = require('chai');
const sieve = require('../../src/CTCI Chapter 6/Sieve of Eratosthenes').default;

describe('Sieve of Eratosthenes', () => {
  it('should pass', () => {
    sieve(20).should.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
