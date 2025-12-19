class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        
        """
        
        # Get the count of each number via a hashmap
        # initialise a min heap of size k
        # push pop elements in the min heap based off their count till we reach the end of our array
        # return the min heap

        hashNums = {}
        res = []

        for n in nums:
            hashNums[n] = 1 + hashNums.get(n, 0)
        
        minHeap = []
        for element, count in hashNums.items():
            heapq.heappush(minHeap, (count, element))
            if len(minHeap) > k:
                heapq.heappop(minHeap)

        for i in range(len(minHeap)):
            res.append(minHeap[i][1])

        return res
        
        
        
        
        
        # bucketNums = [[] for i in range(len(nums) + 1)]
        # hashNums = {}
        # res = []
        
        # for n in nums:
        #     hashNums[n] = 1 + hashNums.get(n, 0)
        
        # for item, count in hashNums.items():
        #     bucketNums[count].append(item)
            
        # for i in range(len(bucketNums) - 1, 0, -1):
        #     for j in bucketNums[i]:
        #         res.append(j)
        #         if len(res) == k:
        #             return res
        
        

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
