'use strict';
/**
 * Merged meeting times, using an array of meeting times, condense the ranges.
 * 
 */

let mergeRanges = (meetings) => {
    //deep copy
    let meetingsCopy = JSON.parse(JSON.stringify(meetings));
    //sort messaged by startTime
    let sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
    //add the first meeting to be merged
    let mergedMeetings = [sortedMeetings[0]];
    //iterate through the remaining meetings
    for (let i = 1; i < sortedMeetings.length; i++) {
        //set the current meeting
        let currentMeeting = sortedMeetings[i];
        //set the last merged meeting to the last item in merged meetings
        let previousMergedMeetings = mergedMeetings[mergedMeetings.length - 1];
        //check if the current meeting starttime is less than or equal to the endtime of the last merged
        if (currentMeeting.startTime <= previousMergedMeetings.endTime) {
            //set the endtime to be the max of endtime for last merged or current meeting
            previousMergedMeetings.endTime = Math.max(previousMergedMeetings.endTime,
                currentMeeting.endTime);
        //current meeting is greater than last merged endtime
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }
    return mergedMeetings;
};
module.exports = mergeRanges;