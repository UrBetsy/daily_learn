function add() {
    const args = Array.from(arguments);
    let sum = reduce(args);
    function s() {
        const inArgs = Array.from(arguments);
        sum += reduce(inArgs);
        return s;
    }
    s.toString = function() {
        return sum;
    }
    return s
}
function reduce(arr) {
    return arr.reduce((pre, curr, currIndex, arr) => pre + curr, 0)
}
console.log(add()(1,2)(3,4,5)()(4,6))