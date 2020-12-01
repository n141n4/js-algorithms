/**
 * Using iteration method
 */

 const myVowels = ['a', 'e', 'i', 'o', 'u']

 function countVowels(text) {
     let counter = 0

     for (let letter of text.toLowerCase()) {

        if (myVowels.includes(letter)) {
            counter ++
        }
     }
     return counter
 }
 console.log(countVowels('mamamdazdezkfvgeeeeezevfzehbfezf'))

 /**
  * Using regular expressions
  */

function countVowels2(text) {

    let matchVowels = text.match(/[aeiou]/gi)

    if (matchVowels) {
        return matchVowels.length
    } else {
        return 0
    }
}
console.log(countVowels2('mamamdazdezkfvgeeeeezevfzehbfezf'))