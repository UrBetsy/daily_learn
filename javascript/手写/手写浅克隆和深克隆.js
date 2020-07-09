//浅克隆：首先判断变量是否为数组，再判断是否为对象
var Clone = function(param){
	var param2 = {}
	for(var i in param){
		param2[i] = param[i]
	}
	return param2
}

var deepClone = function(param,param2){
	var param2 = param2 || {}
	if(typeof(param) == 'object'){
		for (var i in param) {
			param2[i] = (param[i] instanceof Array) ? [] : {}
			param2[i] = deepClone(param[i],param2[i])
		}
	}else{
		param2 = param
	}
	return param2
}

var obj = {
	name : 'lifan',
	age : 25,
	sex : 'female',
	obj : {
		one :'one',
		two :{
			ee: 'hahaha'
		}
	},
	tag:[1,2,3]
}
// var arr = ['1',1,'f',3,2]
// var ccc = Clone(obj)
// console.log('ccc',ccc)
// ccc.obj.one= 'haha'
// console.log('ccc',ccc)
// console.log('obj',obj)
/***
 * 深拷贝
 */ 
// let ddd = deepClone(obj)
// obj.obj.two.ee = '777'
// console.log(obj)
// console.log(ddd)

/***
 * 用一种很简单的方法实现深拷贝
 */

let obj2 = JSON.parse(JSON.stringify(obj))
console.log(obj2)
obj.obj.two.ee = '88'
console.log(obj)
console.log(obj2)