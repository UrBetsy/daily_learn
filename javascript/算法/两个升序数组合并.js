let arr = [1,4,5,8,11]
let brr = [2,3,4,7,9]

function merge(arr1, arr2) {
    let newarr = []
    let i = j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            newarr.push(arr2[j])
            j++;
        } else {
            newarr.push(arr1[i])
            i++;
        }
    }
    if (j !== arr2.length) {
        for (let k = j; k< arr2.length; k++) {
            newarr.push(arr2[k])
        }
    } else if (i !== arr1.length) {
        for (let k = i; k < arr1.length; k++) {
            newarr.push(arr1[k])
        }
    }
    return newarr
}

console.log(merge(arr, brr))