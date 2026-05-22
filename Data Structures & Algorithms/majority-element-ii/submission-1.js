class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let times = Math.floor(nums.length / 3);
        let result = [];

        let counts = new Map()

        for (let i = 0; i < nums.length; i++) {
                counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
        }
        
 for (let num of counts.keys()) {
        if (counts.get(num) > times) {
            result.push(num)
        }
    }

        return result;
    }
}
