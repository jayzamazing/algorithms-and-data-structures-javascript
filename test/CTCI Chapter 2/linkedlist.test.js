'use strict';
const chai = require('chai');
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');


describe.only('linked list', () => {
  it('should create a linked list with only one node', () => {
    let newList = new LinkedList(8);
    newList.head.should.deep.equal(new Node(8));
    newList.tail.should.deep.equal(new Node(8));
    newList.length.should.equal(1);
  });
  it('should create a linked list adding a node with append', () => {
    let newList = new LinkedList(8);
    newList.append(10);
    newList.head.next.should.deep.equal(new Node(10));
    newList.tail.should.deep.equal(new Node(10));
  })
});
