let http=require("http");  //引入核心http模块
let fs=require("fs");

let mime={
    '.js':'application/javascript',
    '.css':'text/css'
}
//创建一个函数，req代表客户端，res代表服务器可写流
let listener=(req,res)=>{
//res是可写流，有write和end
    console.log('进入监听函数listener')
    if(req.url==="/"){
        //设置编码
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        if(fs.existsSync(`.${req.url}`)) {
            res.setHeader('Content-Type',mime[req.url.match(/\.\w+$/)[0]] +';charset=utf-8');
            fs.createReadStream(`.${req.url}`).pipe(res);
        }else{
            res.statusCode=404;
            res.end();
        }
    }
}
//创建一个服务，放入一个监听函数，
let server = http.createServer(listener).listen(8080,'127.0.0.1')