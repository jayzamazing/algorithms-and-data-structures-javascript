'use strict';
const chai = require('chai');
const sRotation = require('../../src/CTCI Chapter 1/1.9 String Rotation').default;

describe.only('String Rotation', () => {
  it('should pass', () => {
    sRotation('waterbottle', 'erbottlewat').should.be.true;
  });
  it('should fail', () => {
    sRotation('waterbottle', 'erbotlewatt').should.be.false;
  });
});
