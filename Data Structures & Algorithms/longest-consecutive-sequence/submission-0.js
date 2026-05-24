class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let numSet = new Set(nums);

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let length = 0;

                while(numSet.has(num+length)) {
                    length++
                }

                longest = Math.max(longest, length)
            }
        }

        return longest;
    }
}
