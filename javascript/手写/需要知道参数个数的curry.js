
/**
 * 这里是一个通过的柯里化方法
 * 需要知道原方法一共有多少个参数
 * 执行结果：4个输出都是5
 */
const curry = (fn, ...args) => {
    return args.length >= fn.length
    ? fn(...args)                                  // 当参数数量够了的时候，执行该方法
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