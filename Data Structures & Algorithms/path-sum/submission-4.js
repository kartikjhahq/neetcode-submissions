/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) return false;

        if (!root.left && !root.right) {
            return root.val === targetSum;
        }

        let remainingSum = targetSum - root.val;

        return this.hasPathSum(root.left, remainingSum) || this.hasPathSum(root.right, remainingSum);
    }
}
