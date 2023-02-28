/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a > 0) break;
        if (i > 0 && a === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const threeSum = a + nums[l] + nums[r];
            if (threeSum > 0) {
                r--;
            } else if (threeSum < 0) {
                l++;
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
}

// sort from lowest to highest first
// loop through the sorted list and set current number
// if its more than 0 break cause everything afterwards gonna be positive already
// if i is more than 0 and current number is equals to the previous, continue to the next iteration because we dont want duplicates in our start point
// once we got our start point, we can solve it like 2 sum ver 2. Set 2 pointers, 1 after the current number and 1 at the end of the array.
// while left less than right, calculate 3sum by adding all 3 together. If more than 0 right-- if less than 0 left++
// if same push the 3 numbers in a array to res then l++ and r--
// while left pointer num is equal to the previous num and left less than right, l++