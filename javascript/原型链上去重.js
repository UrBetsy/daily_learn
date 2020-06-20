var arr = [
  1,2,4,2,1,2,4,4,"1",
  {name: 'lifan', age: 23}, 
  {name: 'lifan', age: 22},
  function () {console.log('haha')},
  function () {console.log('hehe')}
]

// for循环 + 新数组
// let newArr = []
// arr.forEach(item => {
//   if(!newArr.includes(item)) {
//     newArr.push(item)
//   }
// });
// console.log(newArr)
/*
[ 
  1,
  2,
  4,
  '1',
  { name: 'lifan', age: 23 },
  { name: 'lifan', age: 22 },
  [Function],
  [Function] 
]
*/



// 这里是利用reducer方法进行去重
// var reducer = (acc, current) => {
//   return  acc.includes(current) ? [...acc] : [...acc,current]
// }
// let res = arr.reduce(reducer, [])
// console.log(res)
/*
[ 
  1,
  2,
  4,
  '1',
  { name: 'lifan', age: 23 },
  { name: 'lifan', age: 22 },
  [Function],
  [Function] 
]
*/



// 这种方法是将数组拼接成字符串 ， 然后字符串从头到尾用''替换，得到的字符串无重复元素，再转换成字符串。
// 这种方法就是作用于简单的元素
// 这种方法也不能区分数字1 和字符串1
// 这种方法不适用于对象，会报错
// Array.prototype.removeDuplicate= function(){
//   var arr = this
//   var str = arr.join('')
//   var newarr = []
//   while(str){
//   	var head = str[0]
//   	var re = eval('/'+head+'/g')
//   	newarr.push(head)
//   	str = str.replace(re,'')
//   }
//   return newarr
// }
// let newarr = arr.removeDuplicate()
// console.log(newarr)




// 利用set去做去重
// 只要将数组传给Set的构造函数就行了
// 但是输出的结果是set类型的，需要转成Array
// let set = new Set(arr)
// console.log([...set])
/*
[ 1,
  2,
  4,
  '1',
  { name: 'lifan', age: 23 },
  { name: 'lifan', age: 22 },
  [Function],
  [Function] 
]
*/



// 可以利用json数据格式去做去重
// 但是这种方法没办法区分 数字1 和字符串‘1’
// let obj = {}
// arr.forEach((item) => {
//   console.log(typeof(item))
//   if(typeof(item) !== 'function' && !obj[JSON.stringify(item)]) {
//     obj[JSON.stringify(item)] = 1
//   } else if (!obj[item]) {
//     obj[item] = 1
//   }
// });
// console.log(Object.keys(obj))
/*
[ 
  '1',
  '2',
  '4',
  '"1"',
  '{"name":"lifan","age":23}',
  '{"name":"lifan","age":22}',
  'function () {console.log(\'haha\')}',
  'function () {console.log(\'hehe\')}' 
]
*/