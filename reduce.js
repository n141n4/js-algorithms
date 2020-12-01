/**
 * The Array.reduce() method is used to reduce any array to a single value iterate from left to rigth
 * The redice() method takes two arguments a reducer callback functionan optional initial value
 */
let numbers = [1, 2, 3, 4, 5, 6]

let sum = numbers.reduce((accumulator, current) => {
    console.log(current)
    return accumulator + current
}, 0)

console.log(sum)

/* let numbers = [1, 2, 3, 4, 5, 6]

let sum = numbers.reduceRight((accumulator, current) => {
    console.log(current)
    return accumulator + current
}, 0)

console.log(sum) */