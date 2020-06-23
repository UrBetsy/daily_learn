var a = 10;
var obj = {
	a: 20
}
function fn () {
	this = obj; // 这句话试图修改this，运行后会报错
	console.log(this.a);
}
var a = 20;
function fn() {
	function foo() {
		console.log(this.a);
	}
	foo();
}
fn();