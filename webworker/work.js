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

worker.onerror(function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});

// 或者
worker.addEventListener('error', function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});
//关闭
self.close();