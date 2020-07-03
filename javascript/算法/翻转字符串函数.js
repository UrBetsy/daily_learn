function reverse(str) {
    let arr = str.split('')
    let newarr = []
    arr.forEach(item => {
        newarr.unshift(item)
    });
    return newarr.join('')
}

let str = 'abcdef'
console.log(reverse(str))