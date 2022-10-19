// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function countString(str) {
    let count = 0
    let count2 = 0
    for(let i = 0; i < str.length; i++) {
        if (count > count2) return false
        if (str.charAt(i) == ")") {
            count += 1
        }
    }
    for(let i = 0; i < str.length; i++) {
        if (count > count2) return false
        if (str.charAt(i) == "(") {
            count2 += 1
        }
    }
    if(count === count2) {
        return true
    } else {
        return false
    }
}

console.log(countString(sample4))
