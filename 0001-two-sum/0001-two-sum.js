/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
    let complacent;
    for (let i = 0; i < nums.length; i++) {
        complacent = target - nums[i]
        let complacentIndex = map.get(complacent)
        if (map.has(complacent)) return [i, complacentIndex]
        map.set(nums[i], i)
    }
}

// initialise a hashmap
// loop through the array and store the target - value in a variable complacent
// if complacent exists in the map, return the complacent index and the current index
// else store the number in the map with the value as the index in the hashmap