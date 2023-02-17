/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let hashMap = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!hashMap[s[i]]) {
            hashMap[s[i]] = 1
        } else {
            hashMap[s[i]] += 1
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!hashMap[t[i]]) {
            return false
        } else {
            hashMap[t[i]] -= 1
        }
    }
    
    return true
};

// if length of s and length of t is not the same, return false
// loop and hash the first string and set its values to be the frequency of how often the letter appears
// loop through the second string and check if the letter exists in the hashmap, if it does, -1 to the freq, if it doesnt, return false