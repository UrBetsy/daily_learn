/**
 * 这是一个面试题
 * 补充add one two方法，使得：
 * console.log(one(add(two())))
 * console.log(two(add(one()))) 
 */
let globalValue = 0
function fn() {
    globalValue += 1
    if(globalValue === 3) {
        globalValue = 0
        return 3
    }
}
function add() {
    return fn()
}

function one() {
    return fn()
}

function two() {
    return fn()
}
console.log(one(add(two())))
console.log(two(add(one())))