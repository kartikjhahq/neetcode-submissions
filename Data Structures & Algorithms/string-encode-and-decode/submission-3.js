class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = [];

        for (let word of strs) {
            result.push(word.length.toString() + "#" + word);
        }

        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let left = 0;


        while (left < str.length) {
            // we dont know where the delimeters are, so lets find that
            let right = left;

            while (str[right] !== "#") {
                right++;
            }
            // now the length is what we have to figure out! which will be between i and j?
            let wordLength = Number(str.substring(left, right)); // 5

            let wordStart = right + 1;

            let word = str.substring(wordStart, wordStart + wordLength);

            result.push(word);

            left = wordStart + wordLength;
        }

        return result;
    }
}
