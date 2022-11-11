//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

const isPangram = word => {
    let newString = word.toLowerCase()
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alpha.length; i++){
        if (!newString.includes(alpha[i])) {
            return false
        }
    }
    return true
}

//time complexity = O(n)
//space complexity = O(1)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False