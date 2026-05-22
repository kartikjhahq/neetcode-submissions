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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;

        function isSame(left, right) {
            if (!left && !right) {
                return true;
            }

            if ((!left || !right) || (left.val !== right.val)) {
                return false;
            }

            return isSame(left.left, right.left) && isSame(left.right, right.right);
        }

        if (isSame(root, subRoot)) {
            return true;
        }
        if (this.isSubtree(root.left, subRoot)) {
            return true;
        }
        if (this.isSubtree(root.right, subRoot)) {
            return true;
        }

        return false
    }
}
