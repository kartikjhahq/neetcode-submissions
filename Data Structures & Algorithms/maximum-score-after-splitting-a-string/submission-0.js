class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        // no of zeroes in left + no of ones in right
        let zeroCount = 0;
        let oneCount = 0;
        let maxCount = 0;

        for(let i=0; i < s.length; i++) {
            if(s[i] === '1') {
                oneCount++
            }
        }
       
       for(let i=0; i< s.length-1; i++) {
        if(s[i] === '0') {
            zeroCount += 1;
        } else {
            oneCount -= 1;
        }
        maxCount = Math.max(maxCount, (zeroCount+oneCount))
       }
       return maxCount
    }
}
