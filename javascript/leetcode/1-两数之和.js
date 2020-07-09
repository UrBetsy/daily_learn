var twoSum = function(nums, target) {
    for (var i = 0 ; i < nums.length; i++) {
        let current = nums.slice(i + 1);
        if (current.indexOf(target - nums[i]) !== -1) {
            return [i, i + 1 + current.indexOf(target - nums[i])]
        }
    }
};
let nums = [3,2,4]
let target = 6
console.log(twoSum(nums, target))