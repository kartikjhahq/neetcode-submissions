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
    diameterOfBinaryTree(root) {
        let result = 0;

        function getHeight(root) {
            if (!root) return 0;

            let left = getHeight(root.left);
            let right = getHeight(root.right);

            result = Math.max(result, left+right);

            return 1 + Math.max(left, right)
        }

        getHeight(root);

        return result;
    }
}
