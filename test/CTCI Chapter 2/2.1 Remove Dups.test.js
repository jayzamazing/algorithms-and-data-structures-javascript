'use strict';

const chai = require('chai');
chai.should();
const removeDups = require('../../src/CTCI Chapter 2/2.1 Remove Dups');
const {LinkedList, Node} = require('../../src/CTCI Chapter 2/linkedlist');


describe('Remove Dups', () => {
  it('should remove duplicates', () => {
    let newList = new LinkedList(7);
    newList.append(15);
    newList.append(10);
    newList.append(19);
    newList.append(10);
    newList.append(6);
    newList.append(6);
    newList = removeDups(newList);
    newList.printList().should.deep.equal([7, 15, 10, 19, 6]);
  });
});
