/**
 * [1,2,2,4,8,16,32,64] 和为65的组合数
 */
 let res = []
 function traceBack(arr, start, residu, list) {
    if (start === arr.length || residu < 1) {
        if (residu === 0) {
            res[res.length] = [].concat(list)
        }
        return
    }
    for (var i = start; i < arr.length; i++ ) {
        list = list.concat(arr[i])
        traceBack(arr, i + 1, residu - arr[i], list)
        list.pop()
    }
 }

 let arr = [1,2,2,4,8,16,32,64]
 let total = 65
 traceBack(arr, 0, total, [])
 console.log(res)