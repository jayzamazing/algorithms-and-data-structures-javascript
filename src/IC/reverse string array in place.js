'use strict';

/**
 * Takes an array and returns a reversed array in place
 * time: O(n), space: O(1)
 */

let reverseStringArray = (strArray) => {
    let leftIndex = 0;
    let rightIndex = strArray.length - 1;
    while(leftIndex < rightIndex) {
        const temp = strArray[leftIndex];
        strArray[leftIndex] = strArray[rightIndex];
        strArray[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
};

module.exports = reverseStringArray;