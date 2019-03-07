'use strict';
/**
*2.2 Return Kth to Last: Implement an algorithm to find the kth to
*last element of a singly linked list.
*/
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');
/**
* Function to get the kth element before the last node
* @param k - kth to last element - int
* @param head - beginning node from linkedlist
* @return int value of the node
*/
let kthElement = (k, head) => {
  //if there is no node to iterate over
  if (!head) {
    throw new Error('Invalid linked list');
  }
  // set the lead and behind nodes to the head
  let p1 = head;
  let p2 = head;
  // iterate over nodes until k
  for (let i = 0; i < k; i++) {
    //if there are not enough node to iterate over
    if (!p1.next) {
      throw new Error('Not enough nodes');
    }
    //move to the next node
    p1 = p1.next;
  }
  //iterate until the lead node hits the end
  while(p1.next) {
    //move lead and behind nodes to the next node
    p1 = p1.next;
    p2 = p2.next;
  }
  //return the value
  return p2.value;
}

module.exports = kthElement;
