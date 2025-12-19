class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        


        if len(s) != len(t):
            return False
        
        sCount, tCount = {}, {}

        for i in range(len(s)):
            sCount[s[i]] = 1 + sCount.get(s[i], 0)
            tCount[t[i]] = 1 + tCount.get(t[i], 0)

        return sCount == tCount