/**
 * 宏任务和微任务
 */
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

var p = new Promise((resolve) => {
  console.log(4);
  resolve(5);
})

p.then(re => {
  console.log(re);
  setTimeout(() => {
    console.log(6)
  })
}, 0);

console.log(7);
//1347526