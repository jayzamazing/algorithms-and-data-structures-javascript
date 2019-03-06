'use strict';
const chai = require('chai');
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');


describe.only('linked list', () => {
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
});
