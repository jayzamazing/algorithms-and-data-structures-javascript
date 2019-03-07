'use strict';
const chai = require('chai');
chai.should();
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');
const Kth = require('../../src/CTCI Chapter 2/2.2 Return Kth to Last');

describe('Kth to Last', () => {
  it('should get the kth node', () => {
    let newList = new LinkedList(7);
    newList.append(15);
    newList.append(22);
    newList.append(19);
    newList.append(44);
    newList.append(87);
    newList.append(63);
    Kth(4, newList.head).should.equal(22);
  });
  it('should fail with null linked list', () => {
    (
      () => {
          Kth(4, null);
      }
    ).should.throw('Invalid linked list');
  });
  it('should fail when k > linked list length', () => {
    let newList = new LinkedList(7);
    newList.append(15);
    newList.append(22);
    newList.append(19);
    (
      () => {
          Kth(5, newList.head);
      }
    ).should.throw('Not enough nodes');
  });
});
