var Solution = function(nums) {
    this.arr = nums;
};

Solution.prototype.reset = function() {
    return this.arr;
};
Solution.prototype.shuffle = function() {
    let nums = [...this.arr];
    let i = 0;
    function getRandom(start, end) {
        return  parseInt(start + Math.random() * (end - start))
    }
    while(i < nums.length - 1) {
        let index = getRandom(i, nums.length);
        [nums[index], nums[i]] = [nums[i], nums[index]];
        i++;
    }
    return nums;
};

let nums = [1,2,3,4,5,6,7,8,9,10]
var obj = new Solution(nums)
var param_1 = obj.shuffle()
console.log(param_1)
var param_2 = obj.reset()
console.log(param_2)