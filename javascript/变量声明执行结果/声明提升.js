
// 函数式一等公民
// var a;
// function a() {
//     console.log('这里是fn a')
// }

// console.log(a)

// var a = {n: 1}
// a.x = a = {n: 2}
// console.log(a)   // {n: 2}
// console.log(a.x) // undefined

// var a = {x: 1}
// var b = a
// a.x = a = {n: 1}
// console.log(a)
// console.log(b)

// var a={n:1};
// a = a.x = {n:2};
// console.log(a);

// Function.prototype.a = () => console.log(1)
// Object.prototype.b = () => console.log(2)

// function A() {

// }
// var a = new A()
// // console.log(a)
// // a.a()
// // a.b()

// let res = [1,2,3,4,5,6].map(parseInt)
// function parseInt(){
//     console.log(arguments)
// }
// console.log(res)


// 变量提升也有优先级, 函数声明 > arguments > 变量声明
// console.log(c); // [Function: c]
// var c;
// function c(a) {
//     console.log(a); // [Function: c]
//     var a = 3;
//     function a(){
//     }
//     console.log(a) // 3
// }
// c(2);


// var c = 1;
// function c(c) {
//     console.log(c);
//     var c = 3;
// }
// console.log(c); // 1
// c(2); // 报错：c is not a function

// var name = 'erdong';
// (function () {
//     if (typeof name !== 'undefined') {
//         var name = 'chen';
//         console.log(name); // chen
//     } else {
//         console.log(name); // undefined
//     }
// })();

// var a = 10;  
// function test() {  
//     a = 100;  
//     console.log(a);  
//     console.log(this.a); 
//     console.log(this) 
//     var a;  
//     console.log(a); 
// }
// test();


// var a = 2;
// (()=> {
//     console.log(a)
//     let a = 1
// })()