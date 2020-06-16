// var a = {x: 1}
// var b = a
// a.x = a = {n: 1}

var a = {x: 1}
var b = a
a = {n: 1}
a.x = a


console.log(a)
console.log(b)