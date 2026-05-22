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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let result = [];

        function checkSum(root) {
            if (!root) return result.push(0);

            if (root.val >= low && root.val <= high) {
                result.push(root.val);
            }

            checkSum(root.left);
            checkSum(root.right)
        }

        checkSum(root);

        return result.reduce((acc, item) => acc += item)
    }
}
