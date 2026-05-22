class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]) {
        let ans = Array.from({ length: nums.length });

        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[nums.length+i] = nums[i]
        }
        return ans
    }
}
