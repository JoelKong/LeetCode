/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs, map = new Map()) {
    if (!strs.length) return []
    for (let words of strs) {
        const hash = getHash(words)
        const values = map.get(hash) || []
        values.push(words)
        map.set(hash, values)
    }
    
    return [...map.values()]
};


var getHash = function(words) {
    let frequency = new Array(26).fill(0)
    for (let char of words) {
        let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)
        frequency[charCode]++
    }
    return frequency.toString()
}