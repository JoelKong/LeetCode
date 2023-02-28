/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let left = 0
    let right = height.length - 1
    
    while (left < right) {
        const leftHeight = height[left]
        const rightHeight = height[right]
        const _height = Math.min(leftHeight, rightHeight)
        const width = right - left
        const area = _height * width
        max = Math.max(max, area)
        
        if (leftHeight <= rightHeight) {
            left++
        }
        
        if (rightHeight < leftHeight) {
            right--
        }
    }
    return max
}


// Init maxarea, left start 0, right start end
// while left < right, init the left height and right height through indexing
// get the minimum height between the 2
// calculate width right - left
// calculate area height * width
// Math.max current area vs new area
// if left height <= right height increment left
// if right height < left height decrease right
// return max