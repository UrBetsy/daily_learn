// let arr1 = [1, 2, 3, 4, 5, 6]

// reducer = (accumulator, currenValue, currenIndex, initialValue) => {
//     console.log(accumulator, currenValue, currenIndex, initialValue)
//     return accumulator + currenValue
// }

// console.log(arr1.reduce(reducer, 5))
// let arr = [[1,2,3], [2, 3], [4, 5]]
// let newArr = arr.reduce((pre,cur)=>{
//     return [...pre, ...cur]
// },[])
// console.log(newArr); // [0, 1, 2, 3, 4, 5]

let arr2 = [ 1, 2, 3, 2, 3, 4, 5 ]
const reducer2 = (accumulator, currentValue) => {
    if (accumulator.includes(currentValue)) {
        return accumulator
    } else {
        return [...accumulator, currentValue]
    }
}
console.log(arr2.reduce(reducer2, []))

// var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// })
// console.log(arr, sum);

// https://www.jianshu.com/p/d14122c228bd
// https://blog.csdn.net/hjc256/article/details/88323744
// https://www.cnblogs.com/jane2160/p/11174501.html
 
// let str = 'hello'
// console.log([...str])
  


// 0 1 0 [ 1, 2, 3, 4 ]
// 1 2 1 [ 1, 2, 3, 4 ]
// 3 3 2 [ 1, 2, 3, 4 ]
// 6 4 3 [ 1, 2, 3, 4 ]
