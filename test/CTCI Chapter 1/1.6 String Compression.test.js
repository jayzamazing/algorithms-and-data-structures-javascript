'use strict';
const chai = require('chai');
const strComp = require('../../src/CTCI Chapter 1/1.6 String Compression').default;

describe('String Compression', () => {
  it('should pass', () => {
    strComp('aaabbbccc').should.equal('a3b3c3');
    strComp('aaaaaa').should.equal('a6');
  });
  it('should not compress string', () => {
    strComp('abc').should.equal('abc');
  });
});
