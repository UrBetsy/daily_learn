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