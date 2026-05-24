class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seenNums = new Set();
        let nums = n.toString();

        let res = 0;
        
        while (res !== 1) {
            console.log("res", res)
            let total = 0;

            for (let i = 0; i < nums.length; i++) {
                total += nums[i] * nums[i];
            }
            console.log("total", total)

            res = total;
            nums = total.toString();

            if (seenNums.has(res)) {
                return false;
            } else {
                seenNums.add(res);
            }
        }

        return true;
    }
}
