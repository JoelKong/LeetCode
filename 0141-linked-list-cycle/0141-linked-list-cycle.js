/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tortoise = head, hare = head
    while (hare && hare.next) {
        tortoise = tortoise.next
        hare = hare.next.next
        if (tortoise === hare) return true
    }
    return false
    
};

// floyds tortoise and hare algorithm
// set tortoise and hare to start at the same spot
// tortoise increment by 1, hare increment by 2
// loop through the LL, if toroise and hare are the same means there is a cycle