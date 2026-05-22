class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x === 0) return 0;

        let left = 1;
        let right = x;
        let currentRoot = 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if ((mid * mid) <= x) {
                currentRoot = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return currentRoot;
    }
}
