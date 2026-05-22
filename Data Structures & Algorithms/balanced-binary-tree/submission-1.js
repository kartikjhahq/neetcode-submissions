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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true;

        function height(root) {
            if(!root) return 0;

            let left = height(root.left);
            let right = height(root.right);

            if(Math.abs(left - right) > 1) {
                balanced = false;
                return 0;
            }

            return 1 + Math.max(left, right)
        }

        height(root);

        return balanced;
    }
}
