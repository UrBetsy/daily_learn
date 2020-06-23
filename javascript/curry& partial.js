/*
   用到了loadsh里面的_.partial，按照文档上面的例子使用了，但是仍不能理解这方法
   追根溯源的理解一下吧
*/

const curry = (fn, ...args) => {
    return args.length >= fn.length
    ? fn(...args)   // 当参数数量够了的时候，执行该方法
    : (..._args) => curry(fn, ...args, ..._args);  // 当参数不够的时候继续柯里化，返回函数获取后面的参数
}
    

function add1(x, y, z, m) {
    let param = Array.from(arguments)
    function reducer(total,current) {
        return total + current
    }
    return param.reduce(reducer)
}
const add = curry(add1, 0, 2);
console.log(add(1, 2));
console.log(add(1)(2));
console.log(add(1, 2));
console.log(add(1)(2));