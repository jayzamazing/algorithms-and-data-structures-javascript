'use strict';
const chai = require('chai');
chai.should();
const isUnique = require('../../src/CTCI Chapter 1/1.1 isUnique').default;

chai.should();

describe('isUnique', () => {
  it('should return false', () => {
    isUnique('abccda').should.be.false;
  });
  it('should return true', () => {
    isUnique('abcde').should.be.true;
  });
});
