/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s, stack = []) {
    const map = {
        '}' : '{',
        ']' : '[',
        ')' : '(',
    }
    
    for (const char of s) {
        const isBracket = (char in map)
        if (!isBracket) {
            stack.push(char)
            continue
        }
        
        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) {
            stack.pop()
            continue
        }
        
        return false
    
    }
    
    return (stack.length === 0)
}

// create a hashmap with keys representing closing parentheses and values representing opening parentheses
// create a stack and loop through the entire string, if the character does not exist as a key in the hashmap push it to the stack
// else check whether the last element in the stack matches the value of the hashmap with the key representing the char
// if exists, pop it off the stack, if not return false
// if the stack is empty at the end return true else return false
