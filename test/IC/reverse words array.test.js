'use strict';

const chai = require('chai');
const reverseWordsArray = require('../../src/IC/reverse words array');

chai.should();

describe.only('Reverse words array', () => {
    it('should reverse words', () => {
        let input = 'thief cake'.split('');
        reverseWordsArray(input);
        input.join('').should.equal('cake thief');
    });
});