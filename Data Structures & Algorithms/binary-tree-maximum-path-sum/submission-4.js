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
     * @return {number}
     */
    max = -Infinity;
    maxPathSum(root) {
        this.dfs(root);
        return this.max;
    }

    dfs(root) {
        if (!root) return 0;
        let left = Math.max(this.dfs(root.left), 0);
        let right = Math.max(this.dfs(root.right), 0);
        this.max = Math.max(this.max, left + right + root.val);
        return Math.max(left, right) + root.val
    }
}
