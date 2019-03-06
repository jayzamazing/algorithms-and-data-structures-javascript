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
  /**
  * add a node to the beginning of the linked list
  * @param value - value to store
  * @return - returns the linkedlist
  */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  /**
  * Print out the values of the nodes in this linkedlist
  * @return array - containing node values
  */
  printList() {
    //create an array to store values
    const array = [];
    //set current node as head
    let currentNode = this.head;
    //iterate over all the connected nodes
    while(currentNode !== null) {
      //push the current value to the array
      array.push(currentNode.value);
      //set the current node to the next node
      currentNode = currentNode.next;
    }
    return array;
  }
  /**
  * Go through the linked list until it arrives at the specified index
  * @param index - integer to travel to
  * @return currentNode - node with value and next
  */
  traverseToIndex(index) {
    //counter to keep track of the current index
    let counter = 0;
    //beginning node
    let currentNode = this.head;
    //iterate until counter and index are the same
    while(counter !== index) {
      //set next node as current for next iteration
      currentNode = currentNode.next;
      //increment the counter
      counter++;
    }
    return currentNode;
  }
  /**
  * insert node at a specified index
  * @param index - integer to travel to
  * @param value - value to store
  */
  insert(index, value) {
    //if the index is greater than the length of the stored nodes
    if(index >= this.length) {
      //add node to the end of the linked list
      return this.append(value);
    }
    //create a new node
    const newNode = new Node(value);
    //store off the node previous to the requested index
    const leader = this.traverseToIndex(index - 1);
    //store the next node of the leader
    const holdingPointer = leader.next;
    //set the next node of the leader to the new node
    leader.next = newNode;
    //set the next node of the new node to the held pointer
    newNode.next = holdingPointer;
    //increment the length
    this.length++;
    return this.printList();;
  }
  remove(index) {
    //store off the node previous to the requested index
    const leader = this.traverseToIndex(index - 1);
    //get the unwanted node
    const unwantedNode = leader.next;
    //set the leader next node to the node after the unwanted node
    leader.next = unwantedNode.next;
    //decrement the length
    this.length--;
    return this.printList();
  }
}

module.exports = {LinkedList, Node};
