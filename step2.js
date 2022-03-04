// STEP 2 

// 1 SUM ZERO

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return true
            }
        }
    } 
    
    return false
}

// console.log(addToZero([1, 2, 3, -2]))
// console.log(addToZero([1, 2, 3]))

// runtime: O(n^2)
// space: O(n)

// 2 UNIQUE CHARACTERS

const onlyUniqueChars = (str) =>{
    for(let i = 0; i < str.length - 1; i++) {
        if(str.includes(str[i], i + 1)) {
            return false
        }
    
    }

    return true
}

// console.log(onlyUniqueChars("Bob"))

// runtime: O(n)
// space: O(n)

// 3 PANGRAM SENTENCE

const isPangram = (str) => {

    let alph = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;

    let lowerC = str.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < alph.length; i++) {
        if(lowerC.indexOf(alph[i]) === -1) {
            return false
        }
    }
   
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// runtime: O(n)
// space: O(n)

// 4 LONGEST WORD

const findLongestWord = (arr) => {
    let longest = ''
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    
    return longest.length
}

// console.log(findLongestWord(["hi", "hello", "buttcheek", "ping"]))

// runtime: O(n)
// space O(n)