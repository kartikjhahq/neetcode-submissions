class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longest = 0;
        let charSet = new Set();

        for (let right = 0; right < s.length; right++) {
            // valid window
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }

            let windowWidth = right - left + 1;
            longest = Math.max(longest, windowWidth);
            charSet.add(s[right]);
            // invalid window
        }

        return longest
    }
}
