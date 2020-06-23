var a = 2;
(() => {
    console.log(a) 
    let a = 1
})()
// ReferenceError: a is not defined


// var a = 2;
// function fn() {
//     console.log(a)
//     let a = 1;
// }
// fn()
// ReferenceError: a is not defined


// var a = 2
// (function() {
//     console.log(a)
//     let a = 1
// })()
// ReferenceError: a is not defined