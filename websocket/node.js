let http=require("http");  //引入核心http模块
let fs=require("fs");
let _ = require('loadsh')
let mime={
    '.js':'application/javascript',
    '.css':'text/css'
}
//创建一个函数，req代表客户端，res代表服务器可写流
let listener=(req,res)=>{
//res是可写流，有write和end
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
let port=8080;
//创建一个服务，放入一个监听函数，
let server=http.createServer(listener);
//
server.listen(port,function () {
    //启动成功后
    console.log(`start${port}`);
    fs.readFile('./video.png','base64',function(err,data){
        fs.writeFile('./b.png',data.toString(),'base64',function(err){
            if(err){
                console.log('操作失败')
            }else{
                console.log('操作成功')
            }
        })
    })
})