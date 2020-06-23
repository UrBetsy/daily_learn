var p = 1
var d = {}
d.x = 3
console.log(d)
console.log(p=d)
var a={x:1}
var b = a
a.x = a = {n:1}
console.log('a',a)
console.log('b',b)