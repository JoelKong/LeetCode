/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while (n) {
        res += n % 2
        n >>>= 1
    }
    return res
};

// Time Space O(1)
// while there is still bits in the integer, if n % 2 = 1 it means that the number is going to be 1
// shift the bits to the right using >>


//  var hammingWeight = function(n, sum = 0) {
//     while (n !== 0) {
//         n &= (n - 1)
//         sum++
//     }
    
//     return sum
// }