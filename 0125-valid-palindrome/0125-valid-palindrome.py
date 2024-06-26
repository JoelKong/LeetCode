class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        l, r = 0, len(s) - 1
        
        while l < r:
            while l < r and s[l].isalnum() is not True:
                l += 1
            while l < r and s[r].isalnum() is not True:
                r -= 1          
            
            if (s[l].lower() != s[r].lower()):
                return False
            l += 1
            r -= 1
            
        return True
    
    
    
    
#     # Could write own alpha-numeric function
#     def alphanum(self, c):
#         return (
#             ord("A") <= ord(c) <= ord("Z")
#             or ord("a") <= ord(c) <= ord("z")
#             or ord("0") <= ord(c) <= ord("9")
#         )











