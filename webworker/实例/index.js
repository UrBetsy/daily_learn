var Worker = require('webworker-threads').Worker;
var worker = new Worker('worker.js');

worker.postMessage('Hello world')

worker.onmessage = function (event) {
	let received = event.data;
	console.log('主线程发送给worker线程的数据：', event.data)
};