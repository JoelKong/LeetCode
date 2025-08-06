class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """


        # init 2 pointer at the left and right
        # calculate the area and store that number so we can find the max number from the future iterations
        # if height at left is less than height at right, we shift left, if its the opposite, we shift right
        # return the max height


        l, r = 0, len(height) - 1
        maxArea = 0

        while l < r:
            area = min(height[l], height[r]) * (r - l)
            maxArea = max(area, maxArea)

            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return maxArea




















