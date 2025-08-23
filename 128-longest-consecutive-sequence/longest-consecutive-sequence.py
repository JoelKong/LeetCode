class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0
        numSet = set(nums)

        for num in numSet:
            if num - 1 not in numSet:
                longest = 1
                while num + longest in numSet:
                    longest += 1
                res = max(res, longest)

        return res