/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (!head) return head
    let currentNode = head
    let nextNode = null, prevNode = null
    
    while (currentNode) {
        nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }
    
    return prevNode
}



// if there is no head, return empty list
// store head in currentNode
// initialise nextNode and prevNode
// loop through as long as currentNode exists
// set nextNode to be currentNode.next, currentNode.next to be prevNode, prevNode to be currentNode, currentNode to be nextNode
// return the list

/*
var reverseList = function(head) {
    if (!head || !head.next) return head
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead   
}
*/