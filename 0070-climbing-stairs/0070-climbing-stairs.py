class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        n_solution = 1
        nprev_solution = 1
        
        for i in range(n - 1):
            temp = n_solution
            n_solution = n_solution + nprev_solution
            nprev_solution = temp
        
        return n_solution