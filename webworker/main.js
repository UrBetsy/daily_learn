var Worker = require('webworker-threads').Worker;
var worker = new Worker('work.js');
//关闭
// worker.terminate();
worker.onmessage = function (event) {
	document.getElementById('result').textContent = event.data;
};