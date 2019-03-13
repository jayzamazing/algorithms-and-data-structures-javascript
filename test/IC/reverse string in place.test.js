'use strict';

const chai = require('chai');
const reverseStringArray = require('../../src/IC/reverse string array in place');

chai.should();

describe('Reverse string in place', () => {
    it('should reverse string', () => {
        let input = 'ABCDE'.split('');
        reverseStringArray(input);
        input.join('').should.equal('EDCBA');
    });
});