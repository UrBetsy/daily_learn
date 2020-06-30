/**
 * 这里是Array的reducer方法
 * 参考资料：
 * https://www.jianshu.com/p/d14122c228bd
 * https://blog.csdn.net/hjc256/article/details/88323744
 * https://www.cnblogs.com/jane2160/p/11174501.html
 */

/**
 * 利用reducer方法：累加
 */
let arr1 = [1, 2, 3, 4, 5, 6]
reducer = (accumulator, currenValue, currenIndex, initialValue) => {
    return accumulator + currenValue
}
console.log('进行累加结果：', arr1.reduce(reducer, 5)) // 26
/**
 * 利用reducer方法合并数组
 */
let arr = [[1,2,3], [2, 3], [4, 5]]
let newArr = arr.reduce((pre,cur)=>{
    return [...pre, ...cur]
},[])
console.log('合并数组结果：', newArr);                  // [0, 1, 2, 3, 4, 5]
/**
 * 利用reducer方法，去重
 */
let arr2 = [ 1, 2, 3, 2, 3, 4, 5 ]
const reducer2 = (accumulator, currentValue) => {
    if (accumulator.includes(currentValue)) {
        return accumulator
    } else {
        return [...accumulator, currentValue]
    }
}
console.log('数组去重结果：', arr2.reduce(reducer2, []))
/**
 * reducer没有默认值的话，index是从1开始的
 */
arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
 