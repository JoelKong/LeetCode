class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """


        l, r = 0, 1
        maxPrice = 0

        while r < len(prices):
            if prices[l] < prices[r]:
                maxPrice = max(maxPrice, prices[r] - prices[l])
                r += 1
            else:
                l = r
                r += 1


        return maxPrice



















        