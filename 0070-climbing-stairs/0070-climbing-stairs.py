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
    
#         if n == 1:
#             return 1
#         lastTwoSteps = [1,1]
#         for i in range(2, n + 1):
#             nextStep = lastTwoSteps[i - 2] + lastTwoSteps[i - 1]
#             lastTwoSteps.append(nextStep)
            
#         return lastTwoSteps[n]
        
        
        # if n is 0, we are already on that staircase so number of steps is 1. If n is 1, the number of steps is still 1.
        # Beyond this, if n is 2, it is simply the sub problem of 1 and 0.
        memo = [None] * (n + 1)
        
        def climbStairsHelper(n, memo):
            if memo[n] != None:
                return memo[n]
            if n == 0 or n == 1:
                result = 1
            else:
                result = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo)
            memo[n] = result          
            return result
        
        return climbStairsHelper(n, memo)