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
// add as key initialise to 1
// if key of that number is going to increment again, return true