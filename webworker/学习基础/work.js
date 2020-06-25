/**
 * worker线程内部有一个监听事件，监听message事件
 * addEventListener('message', Event)
 * 或者也可以使用
 * self.onmessage
 */
/**
 * self.postMessage()方法用来向主线程发送消息
 */
self.addEventListener('message', function (e) {
	var data = e.data;
	switch (data.cmd) {
		case 'start':
			self.postMessage('WORKER STARTED: ' + data.msg);
			break;
		case 'stop':
			self.postMessage('WORKER STOPPED: ' + data.msg);
			self.close(); // Terminates the worker.
			break;
		default:
			self.postMessage('Unknown command: ' + data.msg);
	};
}, false);
/**
 * 主线程可以监听worker线程是否发生错误，如果发生错误，worker会触发主线程的error事件
 * woker内部也可以监听error事件
 */
self.onerror(function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});

self.addEventListener('error', function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});
/**
 * 使用完毕之后，为了节省资源，必须关闭worker线程，可以在主线程或者worker线程中关闭
 */
self.close();
/**
 * woker内部如果要加载其他脚本，有一个专门的方法 importScripts()
 * 可以同时记载多个脚本
 */
importScripts('script1', 'script2')