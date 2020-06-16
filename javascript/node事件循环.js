setTimeout(() => {
    console.log(1)
}, 0)

setTimeout(() => {
    console.log(2)
}, 10) 
// W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。
// 设置的很小的话，比如1, 比setImmediate执行的还早


setImmediate(() => {
    console.log(4)
})

process.nextTick(()=>{
	console.log(5)
})
new Promise(resolve=>{
	console.log(6)
	resolve();
	console.log(7)
}).then(()=>{
	console.log(8)
})

Promise.resolve().then(()=>{
	console.log(9)
	process.nextTick(()=>{
		console.log(10)
	})
})
console.log(11)

/*
6
7
11
5
8
9
10
1
4
2
*/