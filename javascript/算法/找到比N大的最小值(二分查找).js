function findFirstBigger(N, arr, start, end) {
    start = start || 0;
    end = end || arr.length -1;
    let mid = Math.floor(( start + end ) / 2);
    if (N < arr[mid]) {
        if (mid === start || arr[mid-1] < N) {
            return arr[mid]
        } else {
            return findFirstBigger(N, arr, start, mid - 1)
        }
    } else {
        if (mid === end) {
            return arr[mid]
        } else if (arr[mid + 1] > N) {
            return arr[mid + 1]
        } else {
            return findFirstBigger(N, arr, mid + 1, end)
        }
    }
}

let arr = [1,2,8,9,10];
let N = 4;
console.log(findFirstBigger(N, arr))