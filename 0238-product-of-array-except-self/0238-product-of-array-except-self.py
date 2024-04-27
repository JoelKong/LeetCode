class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        res = [1] * len(nums)
        prefix = 1
        postfix = 1
        
        for n in range(len(nums)):
            res[n] = prefix
            prefix *= nums[n]
            
        for n in range(len(nums) - 1, -1, -1):
            res[n] *= postfix
            postfix *= nums[n]
            
        return res
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    