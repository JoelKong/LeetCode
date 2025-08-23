class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        numsMap = {}

        for i, v in enumerate(nums):
            complement = target - v
            if complement in numsMap:
                return [i, numsMap[complement]]
            numsMap[v] = i
