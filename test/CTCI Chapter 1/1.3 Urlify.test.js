'use strict';
const chai = require('chai');
chai.should();
const urlify = require('../../src/CTCI Chapter 1/1.3 Urlify').default;

describe('urilify', () => {
  it('should pass', () => {
    urlify('Mr John Smith    ', 13).should.equal('Mr%20John%20Smith');
  });
});
