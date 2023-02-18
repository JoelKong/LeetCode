/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let lastTwoSteps = [1, 1];
    for (let i = 2; i <= n; i++) {
        lastTwoSteps[i] = lastTwoSteps[i - 2] + lastTwoSteps[i - 1];
    }
    return lastTwoSteps[n]
};

// draw the actual staircase and analyse the ending of it
// draw the tree
// tabulation bottom up, if n is 1 theres only 1 way
// set last 2 steps to have only 1 solution which is 1 way up
// initialise at 2 since we already calculate 2 steps and loop till end of n
// to calculate the next step is always the next step + the next next step
// return lasttwosteps[n]

// function countDistinctWays(n, memo = {}) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   if (memo[n]) {
//     return memo[n];
//   }

//   const result = countDistinctWays(n - 1, memo) + countDistinctWays(n - 2, memo);
//   memo[n] = result;

//   return result;
// }