/***
 * 题目描述：
 * 实现一个方法flattern:将数组展开n层
 * 采用方法是迭代？？我也不确定
 */
let arr = [1,[2,[3,4,2],2],5,[6]]
function flattern(arr, layers) {
    console.log('我是', layers)
    if (layers < 1) {
        return arr;
    }
    let res = []
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = [...res, ...arr[i]];
        } else {
            res = [...res, arr[i]]
        }
    }
    return flattern(res, layers-1);
}
console.log(flattern(arr, 2));
// [ 1, 2, 3, 4, 2, 2, 5, 6 ]

console.log(flattern(arr, 1));
// [ 1, 2, [ 3, 4, 2 ], 2, 5, 6 ]