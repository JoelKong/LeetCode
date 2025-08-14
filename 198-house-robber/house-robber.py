class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        prev1 = 0  # dp[i-1]
        prev2 = 0  # dp[i-2]

        for num in nums:
            current = max(prev1, num + prev2)
            prev2 = prev1
            prev1 = current

        return prev1

