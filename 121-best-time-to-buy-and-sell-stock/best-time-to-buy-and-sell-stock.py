class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        maxProfit = 0
        left = 0

        for i in range(1, len(prices)):
            if (prices[left] > prices[i]):
                left = i
            else:
                profit = prices[i] - prices[left]
                maxProfit = max(profit, maxProfit)



        return maxProfit















        