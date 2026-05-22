class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let result = [];
        let bucket = [];

        // count
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // bucket
        for (let [num, freq] of freqMap.entries()) {
            if (!bucket[freq]) {
                bucket[freq] = new Set();
            }
            bucket[freq].add(num);
        }

        // result

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) {
                result.push(...bucket[i]);
            }

            if (result.length === k) break;
            // check k, break
        }

        return result;
    }
}
