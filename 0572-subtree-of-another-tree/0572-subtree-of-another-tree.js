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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // given a node, returns whether they are the same
    var isSame = function(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val!=node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }

	// whether root is a subtree of the given node
    var dfs = function(node) {
        if (!node) return false;
        if (node.val===subRoot.val && isSame(node, subRoot)) {
            return true;
        }
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};



// refer to same tree solution, use that as helper function.
// create helper function to check whether its the same tree, if both nodes missing return true, if either one is missing or the value is not the same return false, traverse left and right recursively and make sure both is true
// create function to check whether the main root is a subtree of a node. if theres no node return false, if both values line up and tree check is successful return true.
// recursively travel the left and right to search for the tree.