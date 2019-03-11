'use strict';
const chai = require('chai');
const deleteMiddle = require('../../src/CTCI Chapter 2/2.3 Delete Middle Node');
const { LinkedList, Node } = require('../../src/CTCI Chapter 2/linkedlist');
chai.should();

describe('Delete Middle Node', () => {
    it('should delete middle node', () => {
        let newList = new LinkedList(7);
        newList.append(15);
        newList.append(22);
        newList.append(19);
        newList.append(44);
        newList.append(87);
        newList.append(63);
        let mid = newList.head.next.next.next;
        deleteMiddle(mid);
        newList.printList().should.deep.equal([7, 15, 22, 44, 87, 63]);
    });
    it('should return error', () => {
        (
            () => {
                deleteMiddle("test");
            }
        ).should.throw('issue with node');
    });
});