/***
 * 题目描述：
 * 实现一个方法flattern: 将数组展开一层
 */

let arr = [1,[2,[3,4,2],2],5,[6]]
function flattern(arr) {
    return arr.reduce(reducer, []);
}

function reducer(result, current) {
    if (Array.isArray(current)) {
        return [...result, ...current];
    } else {
        return [...result, current]
    }
}
console.log(flattern(arr))
// [ 1, 2, [ 3, 4, 2 ], 2, 5, 6 ]