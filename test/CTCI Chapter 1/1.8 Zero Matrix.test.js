'use strict';
const chai = require('chai');
chai.should();
const zMatrix = require('../../src/CTCI Chapter 1/1.8 Zero Matrix').default;

describe('Zero Matrix', () => {
  it('should pass', () => {
    zMatrix(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ]
    ).should.deep.equal(
      [
          [1, 0, 1, 0],
          [1, 0, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 1, 0],
          [1, 0, 1, 0]
      ]
    );
  });
  it('should fail', () => {
    zMatrix([]).should.deep.equal([]);
  });
});
