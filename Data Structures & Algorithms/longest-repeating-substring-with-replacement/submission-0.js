class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let left = 0;
        let longest = 0;
        let maxCharFreq = 0;

        for (let right = 0; right < s.length; right++) {
            // char freq
            let rightChar = s[right];
            map[rightChar] = map[rightChar] + 1 || 1;

            // max char freq
            maxCharFreq = Math.max(maxCharFreq, map[rightChar]);

            // window valid
            while (right - left + 1 - maxCharFreq > k) {
                map[s[left]]--;
                left++;
            }

            longest = Math.max(longest, right - left + 1);
            // longest calc
        }

        return longest;
    }
}
