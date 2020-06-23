/**
 * 这里是创建一个http服务器
 * 用node启动之后，访问8888端口，就可以看到响应数据Hello World
 */
var http = require('http');
http.createServer(function (request, response) {
	response.setHeader('Access-Control-Allow-Origin','*')
    response.end('Hello World\n');
}).listen(8888);
/**
 *  终端打印如下信息
 */ 
console.log('Server running at http://127.0.0.1:8888/');