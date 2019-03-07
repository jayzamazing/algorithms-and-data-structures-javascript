'use strict';
/**
* 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.
* FOLLOW UP How would you solve this problem if a temporary buffer is not allowed?
*/


/**
* Function that checks for duplicate throughout the linkedlist
* @param head - beginning node of linkedlist
* @param node - current node to search against
* @return true/false - depending on if there is a duplicate inside the linkedlist
*/
const _checkDups = (head, node) => {
  //set the current node to begin with
  let currNode = head;
  //iterate through all the nodes until a duplicate is found
  while(currNode !== node) {
    //if a dup is found
    if(currNode.value === node.value) {
      return true;
    }
    //move on to the next node
    currNode = currNode.next;
  }
  return false;
}
/**
* Function that removes duplicates from linkedlist
* @param linkedlist full of nodes
* @return linkedlist without duplicates
*/
const removeDups = (linkedList) => {
  //set the current node to begin with
  let node = linkedList.head;
  //keep iterating until there are no nodes left
  while(node !== null) {
    //check if the next node is not null and if there are any dups
    if (node.next !== null && _checkDups(linkedList.head, node.next)) {
      //set the next node to skip over the dup
      node.next = node.next.next;
    } else {
      //otherwise move onto the next node
      node = node.next;
    }
  }
  //return linkedlist to have access to methods within that class
  return linkedList;
};


module.exports = removeDups;
