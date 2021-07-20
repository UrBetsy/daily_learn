// 最简单容易理解的，用两个参数作为例子
var compose1 = function(f,g) {
    return function(x) {
        return f(g(x));
    };
};
// 把上面的方法写简单一点

const compose2 = (f,g) => (...arg) => f(g(...arg))

// 如果不只两个方法的组合，而是多个方法的组合，则可以有这样的实现
const compose3 = (...fns) => {
    // 传入的参数，放入输入中就是fns
    return fns.reduce((f, g) => (...args) => g(f(...args)));
};


function toMath(s) {
    return Number(s);
}

function toFloor(n) {
    return Math.floor(n);
}

function addTwo(s) {
    return s + 2;
}

const handleDeal = compose3(toMath, addTwo);
const res = handleDeal('3.412');

console.log('结果是', res);