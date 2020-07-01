let arr = [1,[2,[3,4,2],2],5,[6]]
function flattern(arr) {
    return arr.reduce(reducer)
}