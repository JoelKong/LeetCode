class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]

        """
        
        numCount = {}
        
        for i, n in enumerate(nums):
            complement = target - n
            if complement in numCount:
                return [numCount[complement],i]
            numCount[n] = i
    