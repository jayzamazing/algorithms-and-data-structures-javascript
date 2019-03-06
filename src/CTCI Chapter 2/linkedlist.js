'use strict';
/**
* This is a simple implementation of a linkedlist
*/

/**
* simple node class to store values and next node
* @param value - value to store
* @param next - reference to the next node
*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
/**
* linked list class to hold multiple nodes
*/
class LinkedList {
  /**
  * initialize linked list with a value and no next, setting tail tostarting node
  * @param value - value to store
  */
  constructor(value) {
    //create a new node and set as head
    this.head = new Node(value);
    //point the tail to the head
    this.tail = this.head;
    //set the length
    this.length = 1;
  }
  /**
  * add a node to the end of the linked list
  * @param value - value to store
  * @return - returns the linkedlist
  */
  append(value) {
    //create a new node
    const newNode = new Node(value);
    //set the head's next value
    this.tail.next = newNode;
    //update the tail to the new node
    this.tail = newNode;
    //increment the length
    this.length++;
    return this;
  }
}

module.exports = {LinkedList, Node};
