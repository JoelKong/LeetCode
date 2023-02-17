/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
    if (s.length <= 1) return true
    let left = 0, right = s.length - 1
    
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    
    return true
};


// convert to lower case and replace non-alpha with empty string
// set 2 pointers, one at the start and one at the end
// check both pointers if same letter then move the pointers towards each other
// once left < right break out and return true else false