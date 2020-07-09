/*
leetcode 75 题目描述
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
*/
var sortColors = function(nums) {
    var num0 = 0
    var num1 = 0
    var num2 = 0
    for(var i=0;i<nums.length;i++){
        switch (nums[i]) {
            case 2:
                nums.splice(i,1)
                nums.splice(num0+num1+num2, 0, 2);
                num2++
                break;
            case 1:
                nums.splice(i,1)
                nums.splice(num0+num1, 0, 1); 
                num1++
                break;
            case 0:
                nums.splice(i,1)
                nums.splice(num0, 0, 0); 
                num0++
                break;
            default:
                break;
        }
    }
    return nums;
};
console.log(sortColors([2,0,2,1,1,0]))
