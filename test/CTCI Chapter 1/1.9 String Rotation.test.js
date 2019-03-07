'use strict';
const chai = require('chai');
chai.should();
const sRotation = require('../../src/CTCI Chapter 1/1.9 String Rotation').default;

describe('String Rotation', () => {
  it('should pass', () => {
    sRotation('waterbottle', 'erbottlewat').should.be.true;
  });
  it('should fail', () => {
    sRotation('waterbottle', 'erbotlewatt').should.be.false;
  });
});
