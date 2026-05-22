class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let maxProf = 0;
        for (let sell = 1; sell < prices.length; sell++) {

            if(prices[buy] < prices[sell]) {
                let profit = prices[sell] - prices[buy];
                maxProf = maxProf + profit
                buy++
            } else {
                buy = sell
            }

        }

        return maxProf
    }
}
