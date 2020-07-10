/****
 * 这个的思想是
 * res开始的时候放进去一个[]，即res =[[]]
 * 循环的将每一项加入到res的每一项中
 * 第一次循环 之前res=[[]], 之后 res = [[], [1]]
 * 第二次循环之后 res = [[],[1],[2],[1,2]]
 * 第三次循环之后 res = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

function allChildren(arr) {
    let res = []
    res.push([])
    for (var i = 0 ; i < arr.length; i++) {
        let size = res.length
        for(var j = 0; j < size; j++) {
            let item = res[j];
            item = item.concat(arr[i])
            res.push(item)
        }
    }
    return res
}

let arr = [1,2,3]
console.log(allChildren(arr))