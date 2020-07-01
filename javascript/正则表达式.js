/**
 * 科学计数法
 */
function num(before_num) {
    let str = '' + before_num;
    str.replace(/\B(?=((\d{3})+)$)/g,',');
    return str
}

let before_num = 12334325;
console.log(num(before_num))

/**
 * 
 * 判断是否是电话号码
 */
// function matchPhone (phone) {
//     let str = '' + phone
//     let reg = /^[1][0-9]{10}$/g
//     return reg.test(str)
    
// }
// let phone1 = 12399437283
// let phone2 = 12399437283
// console.log(matchPhone(phone1));
// console.log(matchPhone(phone2));
