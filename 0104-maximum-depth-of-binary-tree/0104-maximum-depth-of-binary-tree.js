/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
     if (!root) return 0
     const left = maxDepth(root.left)
     const right = maxDepth(root.right)
     const height = Math.max(left, right)
     return height + 1
     
}
 
 
// if no root return 0
// search the left and right recursively while calculating the max height and + 1 to the recursive call