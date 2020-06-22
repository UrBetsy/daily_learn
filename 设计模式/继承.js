// 封装数据
var myObj = (function() {
    var _name = 'sven';
    return {
        getName: function() {
            return _name;
        }
    }
})();

// console.log(myObj.getName());
// console.log(myObj._name);

// 封装实现
Function.prototype.a = () => console.log(1)
Object.prototype.b =() => console.log(2)
function A() {
  
}
var a = new A();
a.a() // 报错
a.b() // 2
A.a() // 1
A.b() // 2