var findDuplicates = function(nums) {
    let res = []
    for(var i = 0; i < nums.length; i++) {
        let current = Math.abs(nums[i]);
        if (nums[current - 1] > 0) {
            nums[current - 1] = 0 - nums[current - 1]
        } else {
            res.push(current)
        }
    }
    return res;
};
let arr = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(arr))