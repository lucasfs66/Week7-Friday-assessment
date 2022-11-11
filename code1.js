//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.



const addToZero = arr => {
    let result = 0
    if (arr.length < 2) {
        return false
    } else{
        for(let i = 0; i < arr.length; i++){
            for(let g = 0; g < arr.length; g++){ 
                        // result = element + ele
                result = arr[i] + arr[g]
                // console.log(result)
                if(result === 0 && i !== g) {
                    // console.log('hello')
                    return true
                }
            }
        };
        return false
    }
}

// runtime complexity = O(n^2)
// space complexity = O(1)


console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True