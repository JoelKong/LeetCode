class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
    
    
        numSet = set(nums)
        maxLength = 0
        
        for n in nums:
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet:
                    length += 1
                maxLength = max(maxLength, length)
                    
        return maxLength
    
    
    
    
    
    