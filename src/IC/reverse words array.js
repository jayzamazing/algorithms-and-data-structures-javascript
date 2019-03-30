'use strict';

/**
 * Function takes array of words and reverses order in place
 * 'thief cake' turns into 'cake thief'
 */

 /**
  * Takes an array and returns a reversed array in place
  * @param {*} strArray 
  * @param {*} leftIndex 
  * @param {*} rightIndex 
  */
let _reverseStringArray = (strArray, leftIndex, rightIndex) => {
    while (leftIndex < rightIndex) {
        const temp = strArray[leftIndex];
        strArray[leftIndex] = strArray[rightIndex];
        strArray[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
};

/**
 * Function to reverse words in an array
 * @param {*} strArray 
 */
let reverseWords = (strArray) => {
    _reverseStringArray(strArray, 0, strArray.length);
    for (let i = 0, start = 0; i <= strArray.length; i++) {
        if (i === strArray.length || strArray[i] === ' ') {
            _reverseStringArray(strArray, start, i - 1);
            start = i + 1;
        }
    }
};

module.exports = reverseWords;