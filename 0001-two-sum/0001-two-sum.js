/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const complement = target - num;
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement)
        if (isTarget) return [ index, sumIndex ];

        map.set(num, index);                          
    }

}

// initialise a hashmap
// loop through the array and store the target - value in a variable complacent
// if complacent exists in the map, return the complacent index and the current index
// else store the number in the map with the value as the index in the hashmap






























