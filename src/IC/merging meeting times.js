'use strict';
/**
 * Merged meeting times, using an array of meeting times, condense the ranges.
 * 
 */

let mergeRanges = (meetings) => {
    //sort the meetings
    meetings.sort((a, b) => a.startTime - b.startTime);
    //add the first meeting to be merged
    const mergedMeetings = [meetings[0]];
    //iterate through the remaining meetings
    for(let i = 1; i < meetings.length; i++) {
        //set the current meeting
        const currentMeeting = meetings[i];
        //set the last merged meeting to the last item in merged meetings
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
        //check if the current meeting starttime is less than or equal to the endtime of the last merged
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            //set the endtime to be the max of endtime for last merged or current meeting
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
            //current meeting is greater than last merged endtime
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }
    return mergedMeetings;
};
module.exports = mergeRanges;