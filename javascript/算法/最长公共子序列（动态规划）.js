
/**
 * 最长公共子序列，可以不连续
 * */
function maxCommon(str1, str2) {
    let length1 = str1.length;
    let length2 = str2.length;
    let positionArr = new Array();
    for (var i = 0; i < length1; i++) {
        positionArr[i] = []
        for (var j = 0; j < length2; j++) {
            positionArr[i][j] = '';
        }
    }
    for (var i = 0; i < length1; i ++) {
        for (var j = 0; j < length2; j++) {
            if (str1[i] === str2[j]) {
                if (i === 0 || j === 0) {
                positionArr[i][j] = str1[i];
                } else {
                positionArr[i][j] = positionArr[i-1][j-1] + str1[i]
                }
            } else {
                if (i === 0 || j === 0) {
                    positionArr[i][j] = '';
                } else {
                    positionArr[i][j] = positionArr[i-1][j-1];
                }
            }
        }
    }
    let arr = positionArr[length1-1]
    arr.sort((a,b) => {
        return b.length - a.length
    })
    console.log(arr[0])
}

let str1 = '4antidkeivdsl';
let str2 = '4futidkofwelf';
maxCommon(str1, str2)
