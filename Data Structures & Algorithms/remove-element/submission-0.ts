class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number) {
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] === val) {
                continue;
            } else {
                nums[left] = nums[right];
                left++;
            }
        }

        return left;
    }
}
