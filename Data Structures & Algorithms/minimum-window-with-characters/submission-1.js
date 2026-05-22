class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // if t is larger
        if (t.length > s.length) return "";

        // freq map for needed characters
        let need = new Map();
        for (let i = 0; i < t.length; i++) {
            need.set(t[i], (need.get(t[i]) || 0) + 1);
        }

        let left = 0;
        let required = need.size;
        let formed = 0;
        let window = new Map();
        let minLength = Infinity;
        let minStart = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            // add current character to window,
            window.set(char, (window.get(char) || 0) + 1);

            // if character counts match in window and need, increment formed;

            if (need.has(char) && window.get(char) === need.get(char)) {
                formed++;
            }

            // while formed is required
            while (formed === required) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    minStart = left;
                }

                const leftChar = s[left];

                // Decrease the frequency of the character leaving the window
                window.set(leftChar, window.get(leftChar) - 1);

                // If removing this character breaks the requirements, decrement formed
                if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }

                left++
            }
        }


        return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength)
    }
}
