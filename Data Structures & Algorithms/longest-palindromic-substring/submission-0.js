class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = "";

        for (let i = 0; i < s.length; i++) {
            let oddPal = this.isPalindrome(s, i, i);
            let evenPal = this.isPalindrome(s, i, i + 1);
            let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;

            if (longestPal.length > longest.length) {
                longest = longestPal;
            }
        }

        return longest;
    }

    isPalindrome(s, left, right) {
        // is palindrome
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // return slice
        return s.slice(left + 1, right);
    }
}
