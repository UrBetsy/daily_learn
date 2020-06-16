/*
   用到了loadsh里面的_.partial，按照文档上面的例子使用了，但是仍不能理解这方法
   追根溯源的理解一下吧
*/
function fn() {  
    console.log(arguments)
}
 
fn(1,2);      