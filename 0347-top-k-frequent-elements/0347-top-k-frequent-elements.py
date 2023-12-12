class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        
        """
        
        bucketNums = [[] for i in range(len(nums) + 1)]
        hashNums = {}
        res = []
        
        for n in nums:
            hashNums[n] = 1 + hashNums.get(n, 0)
        
        for item, count in hashNums.items():
            bucketNums[count].append(item)
            
        for i in range(len(bucketNums) - 1, -1, -1):
            for j in bucketNums[i]:
                res.append(j)
                if len(res) == k:
                    return res
        
        
    
        