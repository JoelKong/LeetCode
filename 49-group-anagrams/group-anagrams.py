class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        hashmap = collections.defaultdict(list)

        for word in strs:
            asciituple = [0] * 26
            for char in word:
                asciituple[ord(char) - ord('a')] += 1
            hashmap[tuple(asciituple)].append(word)



        return hashmap.values()



    

    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    