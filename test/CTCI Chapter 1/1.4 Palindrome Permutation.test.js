'use strict';
const chai = require('chai');
const palindrome = require('../../src/CTCI Chapter 1/1.4 Palindrome Permutation').default;

describe('Palindrome Permutation', () => {
  it('should pass', () => {
    palindrome('Tact Coa').should.be.true;
  });
  it('should fail', () => {
    palindrome('Tact boa').should.be.false;
  });
});
