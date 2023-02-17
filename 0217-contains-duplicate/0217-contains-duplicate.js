/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1
        } else {
            return true
        }
    }
    return false
};


// loop through every single element in the array
// add as key and + 1 to frequency if it exists
// if it doesnt, initialise to 1
// loop through the hashmap and see if frequency is more than 1, return true if positive, return false if negative