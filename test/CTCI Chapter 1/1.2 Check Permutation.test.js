'use strict';
const chai = require('chai');
chai.should();
const checkPermutation = require('../../src/CTCI Chapter 1/1.2 Check Permutation').default;

describe('check permutation', () => {
  it('should fail due to incorrect length', () => {
    checkPermutation('abc', 'abc ').should.be.false;
  });
  it('should fail due to not being a permutation', () => {
    checkPermutation('abcde', 'abcjk').should.be.false;
  });
  it('should pass', () => {
    checkPermutation('abcde', 'abcde').should.be.true;
  });
});
