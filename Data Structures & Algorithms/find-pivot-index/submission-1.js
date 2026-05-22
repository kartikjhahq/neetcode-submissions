class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = 0;
        for (let i = 0; i < nums.length; i++) {
            total += nums[i];
        }

        let prefixSum = 0;

        for (let i = 0; i < nums.length; i++) {
            let suffixSum = total - nums[i] - prefixSum;

            if (prefixSum === suffixSum) {
                return i;
            }

            prefixSum += nums[i];
        }

        return -1
    }
}
