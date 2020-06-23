function fn(x){
    x = x + 1
    return x
}
var a = 2;
var b = new Number(2)
var c = fn(b)
var d = new String(2)
var f = fn(d)
var o = new Object({
    0:2
})
var m = fn(o)
console.log(b) //[Number: 2]
console.log(c) //3
console.log(d) //[String: 2]
console.log(f) //3
console.log(o) //{ '0': 2 }
console.log(m) //[object Object]1  因为String({1:2}) = "[object Object]"