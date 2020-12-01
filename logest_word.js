/**
 * 1. Using a for-loop
 * 2. Using the .reduce() method
 * 3. Using the .sort() method
 */

// 1. Using the for loop

sentence = "Je suis un développeur qui essaie d'apprendre des nouvelles choses chaque jour";
// should return developer

function longestWord(sentence) {
    let wordArray = sentence.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i ++) {
        if(wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    console.log(result)
    return result
}

longestWord(sentence)

/**
 * 2. Using the .reduce()
 */

sentence2 = "Masina ny tanindrazana"

function longestWordWithReduce() {
    let resultReduce = sentence2.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    console.log(resultReduce)
    return resultReduce
}

longestWordWithReduce()

/**
 * 3. Using the sort() method
 */

sentence3 = "Mangamanga ny lanitra"

function longestWordWithSort() {
    let sortedArray = sentence3.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
    console.log(sortedArray[0])
    return sortedArray[0]
}

longestWordWithSort()