'use strict';
const chai = require('chai');
const rotateM = require('../../src/CTCI Chapter 1/1.7 Rotate Matrix').default;

describe('Rotate Matrix', () => {
  it('will pass', () => {
    rotateM(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
      ]
    )
    .should.deep.equal(
      [
        [ 13, 9, 5, 1 ],
        [ 14, 10, 6, 2 ],
        [ 15, 11, 7, 3 ],
        [ 16, 12, 8, 4 ]
      ]
    );
  });
  it('will fail', () => {
    rotateM([]).should.deep.equal([]);
  });
});
