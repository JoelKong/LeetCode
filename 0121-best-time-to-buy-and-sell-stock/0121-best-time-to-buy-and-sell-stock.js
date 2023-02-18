/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let tempProfit = 0
    let left = 0
    let right = 1
    while (right < prices.length) {
        if (prices[left] <= prices[right]) {
            tempProfit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, tempProfit)
            right++
        } else {
            left = right
            right++
        }
    }
    return maxProfit
};

