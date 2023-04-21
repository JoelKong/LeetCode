/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums, maxScore = 0) {
    const numSet = new Set(nums)
    for (const num of numSet) {
        const prevNum = num - 1
        if (numSet.has(prevNum)) continue
        let currentNum = num
        let score = 1
        while (numSet.has(currentNum + 1)) {
            currentNum++
            score++
        }
        
        maxScore = Math.max(maxScore, score)
    }
    return maxScore
};

// draw out and visualise by sequence. we want to check the left neighbour whether got anything to signify start of sequence.
// create new set of nums, loop through the set and check left neighbour, if it exists means its not a sequence so continue
// if it exists init score to 0 and set current number
// then continue while loop and check whether the right neighbour exists. if it does just keep adding to score and to currentnum
// then set max score to be the math.max of the current loop's score and its max






