var values = [1, 2, 3, 4, 5];
/**
 * Math.random 的范围 [0, 1)
 * Math.random - 0.5 的范围 [-0.5, 0.5)  ；[-0.5, 0] 正序 (0, 0.5) 倒序
 * 取相反数 (Math.random -0.5) 的范围 (-0.5, 0.5] ； (-0.5, 0] 正序 (0, 0.5] 倒序
 */
values.sort(function(){
    return 0 - (Math.random() - 0.5);
});

console.log(values)