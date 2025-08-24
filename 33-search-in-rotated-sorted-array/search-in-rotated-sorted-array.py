class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
      
        # set my left and right pointer, find the middle point
        # keep looping until my left crosses or is the same as my right, if never find, return -1
        # figure out my left and right sorted portion of the array
        # figure out whether my target falls within that range if not we pick the other side (repeat this for both sides of the sorted array)

        l, r = 0, len(nums) - 1

        while l <= r:
            mid = (r + l) // 2
            if nums[mid] == target:
                return mid

            # Left sorted array
            if nums[l] <= nums[mid]:
                if target > nums[mid] or target < nums[l]:
                    l = mid + 1
                else:
                    r = mid - 1
            
            # Right sorted array
            else:
                if target < nums[mid] or target > nums[r]:
                    r = mid - 1
                else:
                    l = mid + 1
      
      
      
      
        return -1
      
      
      
      
