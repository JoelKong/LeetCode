class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
#         n_solution = 1
#         nprev_solution = 1
        
#         for i in range(n - 1):
#             temp = n_solution
#             n_solution = n_solution + nprev_solution
#             nprev_solution = temp
        
#         return n_solution
    
        if n == 1:
            return 1
        lastTwoSteps = [1,1]
        for i in range(2, n + 1):
            nextStep = lastTwoSteps[i - 2] + lastTwoSteps[i - 1]
            lastTwoSteps.append(nextStep)
            
        return lastTwoSteps[n]
        