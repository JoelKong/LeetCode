/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
};

// create a set to check for duplicates
// set left pointer to 0, our right is going to be constantly shifting, max substring = 0
// loop through the string with r. while the set contains the char, delete the number in the set with the left pointer. then increment the left
// if not add the right pointer to the set and calculate math.max of the current and set.size