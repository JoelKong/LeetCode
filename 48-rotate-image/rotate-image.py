class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        l, r = 0, len(matrix[0]) - 1

        while l < r:
            for i in range(r - l):
                top, bottom = l, r
                
                # Save the top left
                topLeft = matrix[top][l + i]

                # Move bottom left into top left
                matrix[top][l + i] = matrix[bottom - i][l]

                # Move bottom right to bottom left
                matrix[bottom - i][l] = matrix[bottom][r - i]

                # Move top right to bottom right
                matrix[bottom][r - i] = matrix[top + i][r]

                # Move top left to top right
                matrix[top + i][r] = topLeft

            l += 1
            r -= 1