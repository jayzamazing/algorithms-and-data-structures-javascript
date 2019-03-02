'use strict';

const chai = require('chai');
const isPrime = require('../../src/CTCI Chapter 6/isPrime').default;

describe('isPrime', () => {
  it('should pass', () => {
    isPrime(11).should.be.true;
  });
  it('should fail', () => {
    isPrime(1).should.be.false;
    isPrime(8).should.be.false;
  });
});
