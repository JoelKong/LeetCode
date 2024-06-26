class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        
        maxArea = 0
        l, r = 0, len(height) - 1
        
        while l < r:
            area = (r - l) * min(height[l], height[r])
            maxArea = max(maxArea, area)
            
            if height[l] <= height[r]:
                l += 1
            else:
                r -= 1
        
        return maxArea
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    