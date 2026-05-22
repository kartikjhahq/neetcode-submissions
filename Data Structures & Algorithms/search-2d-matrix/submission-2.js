class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        // vertical binary search
        let top = 0;
        let bottom = rows - 1;

        while (top <= bottom) {
            let row = Math.floor((top + bottom) / 2);

            if (target > matrix[row][cols - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bottom = row - 1;
            } else {
                break;
            }
        }

        if (!(top <= bottom)) {
            return false;
        }
        // horizontal binary search
        let row = Math.floor((top + bottom) / 2);
        let left = 0;
        let right = cols - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (target === matrix[row][mid]) {
                return true;
            } else if (target > matrix[row][mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
