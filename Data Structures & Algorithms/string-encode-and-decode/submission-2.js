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
        let i = 0;
        let result = [];

        while (i < str.length) {
           let j = i;

            while (str[j] !== "#") {
                j++;
            }

            let length = parseInt(str.substring(i, j));

            let wordStart = j + 1;

            let word = str.substring(wordStart, wordStart + length);

            result.push(word);

            i = wordStart + length;
        }

        return result;
    }
}
