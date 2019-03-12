'use strict';
const mergeRanges = require('../../src/IC/merging meeting times');
const chai = require('chai');
chai.should();

describe.only('Merge Ranges', () => {
    it('should condense meeting ranges', () => {
        mergeRanges([
            { startTime: 1, endTime: 4 },
            { startTime: 2, endTime: 5 },
            { startTime: 5, endTime: 8 },
        ]).should.deep.equal([{ startTime: 1, endTime: 8 }]);
    });
    it('meetings should not be merged', () => {
        mergeRanges([
            { startTime: 5, endTime: 8 },
            { startTime: 1, endTime: 4 },
            { startTime: 6, endTime: 8 },
        ]).should.deep.equal([{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }]);
    });
});