//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


const hasUniqueChars = word => {
    let wordSet = new Set(word);
    let lengthWord = word.length;
    let lengthset = wordSet.size;
  
    if (lengthWord === lengthset) {
      return true
    } else {
      return false
    }
}

//time complexity = O(1)
//space complexity = O(1)

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False