'use strict';
const chai = require('chai');
chai.should();
const oneAway = require('../../src/CTCI Chapter 1/1.5 One A Way').default;

describe('One Way', () => {
  it('should pass', () => {
    oneAway('pale', 'ple').should.be.true;
    oneAway('pales', 'pale').should.be.true;
    oneAway('ple', 'pale').should.be.true;
    oneAway('pale', 'bale').should.be.true;
  });
  it('should fail', () => {
    oneAway('pale', 'bake').should.be.false;
  });
});
