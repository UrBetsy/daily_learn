/**
 * generator
 * 参考资料：https://www.jianshu.com/p/83da0901166f
 */
function *a() {
	console.log('a start');
	yield 2;
	console.log('a end');
}
function *b() {
	console.log('b start');
	yield 1;
	yield *a(); // 将a委托给b
	yield 3;
	console.log('b end');
}
let it = b();
it.next().value;    // b start
                    // 1 
it.next().value;    // a start
                    // 2
it.next().value;    // a end
                    // 3
it.next().value;    // b end