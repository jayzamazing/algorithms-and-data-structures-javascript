'use strict';
const chai = require('chai');
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');


describe('linked list', () => {
  it('should create a linked list with only one node', () => {
    let newList = new LinkedList(8);
    const testNode = new Node(8);
    newList.head.should.deep.equal(testNode);
    newList.tail.should.deep.equal(testNode);
    newList.length.should.equal(1);
  });
  it('should create a linked list adding a node with append', () => {
    let newList = new LinkedList(8);
    newList.append(10);
    const testNode = new Node(10);
    newList.head.next.should.deep.equal(testNode);
    newList.tail.should.deep.equal(testNode);
  });
  it('should create a linked list adding a node with prepend', () => {
    let newList = new LinkedList(8);
    newList.prepend(10);
    const testNode2 = new Node(8);
    const testNode = new Node(10, testNode2);
    newList.head.should.deep.equal(testNode);
    newList.tail.should.deep.equal(testNode2);
  });
  it('should print out the values of a linked list', () => {
    let newList = new LinkedList(8);
    newList.append(9);
    newList.append(10);
    newList.printList().should.deep.equal([8, 9, 10])
  });
  it('should return the node at specified index with traverseToIndex', () => {
    let newList = new LinkedList(8);
    newList.append(9);
    newList.append(10);
    newList.traverseToIndex(1).value.should.equal(9);
  });
  it('should insert a new node at specified index', () => {
    let newList = new LinkedList(8);
    newList.append(9);
    newList.append(10);
    newList.insert(1, 25).head.next.value.should.equal(25);
  });
  it('should remove a new node from a specified index', () => {
    let newList = new LinkedList(8);
    newList.append(9);
    newList.append(10);
    newList.remove(1);
    newList.head.next.value.should.equal(10);
  });
});
