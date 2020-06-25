/**
 * 参考资料： http://www.ruanyifeng.com/blog/2018/07/web-worker.html
 * 主线程
 */
/**
 * 用new关键字创建worker线程
 */
var Worker = require('webworker-threads').Worker;
var worker = new Worker('./work.js');
/**
 * 主线程调用worker.postMessage()方法，向 Worker 发消息
 */
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});
/**
 * 主线程通过worker.onmessage指定监听函数，接收子线程发回来的消息
 * event.data 是worker线程发送给主线程的数据
 */
worker.onmessage = function (event) {
	let received = event.data;
	console.log(event.data)
};
/**
 * 主线程可以监听worker线程是否发生错误，如果发生错误，worker会触发主线程的error事件
 */
worker.onerror = function (event) {
	console.log([
	  'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
	].join(''));
  }
  
worker.addEventListener('error', function (event) {
	console.log([
	  'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
	].join(''));
});
/**
 * 使用完毕之后，为了节省资源，必须关闭worker线程，可以在主线程或者worker线程中关闭
 */
worker.terminate();
/**
 * 主线程与 Worker 之间的通信内容，可以是文本，也可以是对象。需要注意的是，这种通信是拷贝关系，即是传值而不是传址，
 * Worker 对通信内容的修改，不会影响到主线程。
 * 事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原
 */
 /**
 * 但是，拷贝方式发送二进制数据，会造成性能问题。
 * 比如，主线程向 Worker 发送一个 500MB 文件，默认情况下浏览器会生成一个原文件的拷贝。
 * 为了解决这个问题，JavaScript 允许主线程把二进制数据直接转移给子线程，
 * 但是一旦转移，主线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面。
 * 这种转移数据的方法，叫做Transferable Objects。这使得主线程可以快速把数据交给 Worker，对于影像处理、声音处理、3D 运算等就非常方便了，不会产生性能负担。
 * worker.postMessage(arrayBuffer, [arrayBuffer]);
 */
var ab = new ArrayBuffer(1);
worker.postMessage(ab, [ab]);
/**
 * 通常情况下，worker载入的是一个单独的js文件，但是也可以载入与出现成在同一个网页的代码
 */
