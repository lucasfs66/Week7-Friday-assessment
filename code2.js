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



console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False