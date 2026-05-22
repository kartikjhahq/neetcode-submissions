class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        for(let i = 0; i < s.length; i++) {
            let oddPal = this.countPalindromes(s, i, i);
            count += oddPal;
            let evenPal = this.countPalindromes(s, i, i+1);
            count += evenPal;
        }

        return count
    }

    countPalindromes(s, left, right) {
        let count = 0;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
            count++
        }

        return count
    }
}
