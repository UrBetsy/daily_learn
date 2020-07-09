var addTwoNumbers = function(l1, l2) {
    let num1 = l1.split('->').join('')
    let num2 = l2.split('->').join('')
    let sum = num1 + num2;
    console.log(num1, num2, sum)
    return String(sum).split('').join('->')
};

let a = '2 -> 4 -> 3'
let b = '5 -> 6 -> 4'
console.log(addTwoNumbers(a, b))