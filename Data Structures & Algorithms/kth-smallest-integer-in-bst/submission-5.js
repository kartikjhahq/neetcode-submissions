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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {

        let count = 0;
        let result = null;

        function inorder(root) {
            if (!root || result !== null) return;

            inorder(root.left);
            count++;
            if(count === k) {
                result = root.val
            }
            inorder(root.right);
        }

        inorder(root);

        return result;
    }
}
