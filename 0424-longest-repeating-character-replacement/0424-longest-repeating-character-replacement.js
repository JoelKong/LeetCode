/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {}
    let res = 0
    let l = 0
    let maxFreq = 0
    
    for (let r = 0; r < s.length; r++) {
        count[s[r]] = 1 + (count[s[r]] || 0)
        maxFreq = Math.max(maxFreq, count[s[r]])
        
        while ((r - l + 1) - maxFreq > k) {
            count[s[l]] -= 1
            l += 1
        }
        
        res = Math.max(res, (r - l + 1))
    }
    
    return res
};

// set up a hashmap count, res = 0, left pointer 0 and a maxFreq of 0
// loop through the length of the string with r, map value of the char to be 1 + current value if not 0
// calculate max freq with the current max and the value just added
// while the length of the window(r-1+1) minus the maxfreq is more than k, remove the value (-1) of the map at the left pointer then increment the left pointer
// after the while loop calculate the max of the result via the current max and length of the sliding window, return res