class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        
        hashNums = {}

        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashNums:
                return [hashNums[complement], i]
            
            hashNums[nums[i]] = i

        return []