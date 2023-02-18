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


// set 2 pointers at the start and start + 1
// compare both values, if future value is less than start, set left pointer to be the right pointer and +1 to right pointer
// if not calculate the profit under a temp variable and find the maximum of the maxProfit and tempProfit