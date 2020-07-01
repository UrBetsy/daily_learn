let obj = {name : 'xixi'}
let obj2 = obj1

console.log(obj)  // {name : 'xixi'}
console.log(obj2) // {name : 'xixi'}

obj.name = 'haha'

console.log(obj)  // {name : 'haha'}
console.log(obj2) // {name : 'haha'}

obj = null;

console.log(obj)  // null
console.log(obj2) // {name : 'haha'}
