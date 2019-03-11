'use strict';
/**
 * 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
* the first and last node, not necessarily the exact midd le) of a singly linked list, given only access to
* that node .
* EXAMPLE
* Input: the node c from the linked list a- >b - >c - >d - >e- >f
* Result: nothing is returned , but the new linked list looks like a- >b- >d- >e - >f
 */

 let deleteMid = (node) => {
     //ensure that a valid node is input and it has a next node
     if (!node || !node.next) {
        throw new Error('issue with node');
    }
    //set the value of the next to this node
     node.value = node.next.value;
     //set the next to skip next node and go to the following node
     node.next = node.next.next;
 }

 module.exports = deleteMid;