class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // clean array

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= 0 || nums[i] > nums.length) {
                nums[i] = nums.length + 1;
            }
        }

        // mark negative

        for (let i = 0; i < nums.length; i++) {
            let num = Math.abs(nums[i]);
            if (num > nums.length) continue;

            let targetId = num - 1;

            if (nums[targetId] > 0) {
                nums[targetId] = -nums[targetId];
            }
        }

        // get first positive and return

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return nums.length + 1;
    }
}
