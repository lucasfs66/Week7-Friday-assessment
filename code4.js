const findLongestWord = arr => {
    let lengths = []

    arr.forEach(element => {
        lengths.push(element.length)
    });

    console.log(Math.max(...lengths))
}

//time = O(n)
//space = O(n)

findLongestWord(["hi", "hello"]);
// -> 5


