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
    isValidBST(root) {
        function valid(root, left, right) {
            if (!root) return true;

            if (!(root.val < right && root.val > left)) {
                return false;
            }

            return valid(root.left, left, root.val) && valid(root.right, root.val, right);
        }

        return valid(root, -Infinity, Infinity);
    }
}
