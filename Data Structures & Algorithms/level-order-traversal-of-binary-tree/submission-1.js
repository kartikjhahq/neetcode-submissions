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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        let result = [];
        let queue = [root];

        while (queue.length > 0) {
            let levelRes = [];
            let levelSize = queue.length;

            while (levelSize > 0) {
                let root = queue.shift();

                if (root.left) {
                    queue.push(root.left);
                }
                if (root.right) {
                    queue.push(root.right);
                }
                levelRes.push(root.val);
                levelSize--;
            }
            result.push(levelRes);
        }
        return result;
    }
}
