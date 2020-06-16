// var obj1 = { name1 :'lili1'}
// var obj2 = { name2 :'lili2'}
// var obj3 = { name1 :'lili1'}
var arr = [1,2,4,2,1,2,4,4]
var arr = []
arr.push(obj1,obj2,obj3)
Array.prototype.removeDuplicate= function(){
  var arr = this
  var str = arr.join('')
  var newarr = []
  while(str){
  	var head = str[0]
  	var re = eval('/'+head+'/g')
  	newarr.push(head)
  	str = str.replace(re,'')
  }
  return newarr
}
let newarr = arr.removeDuplicate()
console.log(newarr)