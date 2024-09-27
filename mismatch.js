function checkMismatchedBrackets(str) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let char of str) {
        if (bracketMap[char]) {
            // If opening bracket, push to stack
            stack.push(char);
        } else if (Object.values(bracketMap).includes(char)) {
            // If closing bracket, check if it matches the last opened
            const lastOpened = stack.pop();
            if (bracketMap[lastOpened] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // If stack is not empty, there are unmatched opening brackets
    return stack.length === 0;
}

// Test cases
console.log(checkMismatchedBrackets('{}'));      // true
console.log(checkMismatchedBrackets('[[}}'));    // false
console.log(checkMismatchedBrackets('[{()}]'));  // true
console.log(checkMismatchedBrackets('[{()]'));   // false
