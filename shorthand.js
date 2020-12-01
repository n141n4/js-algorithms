/**
 * OR OPERATOR
 */

/**
 * LONGHAND
 */
let result, name = 'JS Startup'
if (name) {
    result = name
} else {
    result = ""
}
console.log(result)

/**
 * SHORTHAND
 */
let result2, name2 = 'JS Startup'
result2 = name2 // ""
console.log(result2)


/**
 * AND OPERATOR
 */

 /**
 * LONGHAND
 */
let result3, first = 'JS', last = 'Startup'
if (first) {
    result3 = first
} else {
    result3 = last
}
console.log(result3)


/**
 * SHORTHAND
 */
let res4, fst = 'JS', lst = 'Startup'
    res4 = fst && lst
    res4 = lst && fst
console.log(res4)


/**
 * TERNARY OPERATOR
 */

/**
  * LONGHAND
  */

let res5, name4 = 'JS Startup'
if (name4) {
     res5 = name4
} else {
     res5 = ""
}
console.log(res5)

/**
  * SHORTHAND
  */

let res6 = name5 = "JS Startup"
res6 = name5 ? name5 : ""
console.log(res6)
