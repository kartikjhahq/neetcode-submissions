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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */

    serialize(root) {
        let result = [];

        function preorder(root) {
            if (!root) {
                result.push("#");
                return;
            }
            result.push(root.val.toString());
            preorder(root.left);
            preorder(root.right);
        }

        preorder(root);
        return result.toString();
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let tokens = data.split(",");
        let index = 0;

        function dfs(tokens) {
            if (tokens[index] === "#") {
                index++;
                return null;
            }
            let root = new TreeNode(Number(tokens[index]));
            index++;
            root.left = dfs(tokens, index);
            root.right = dfs(tokens, index);
            return root;
        }

        return dfs(tokens);
    }
}
