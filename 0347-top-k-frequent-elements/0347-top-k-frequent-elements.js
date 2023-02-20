/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k, map = {}) {
    const arrCount = new Array(nums.length + 1)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }
    console.log(map)
    
    for (key in map) {
        if (!arrCount[map[key]]) {
            arrCount[map[key]] = []   
        }
        arrCount[map[key]].push(key)   
    }
    
    
    for (let i = arrCount.length - 1; i > 0; i--) {
        if (arrCount[i]) {
            for (let j of arrCount[i]) {
                res.push(j)
                if (res.length === k) return res
            }
        }
    }
    
};

// create array of length + 1
// store the numbers and freq in a map
// create result
// loop through the map and push arrCount[value] with the key. initialise those with the key to a empty array first
// loop through the length of the array - 1 and check if theres a filled array inside first, then loop through that filled array to push the elements in res. if res more than k return res


