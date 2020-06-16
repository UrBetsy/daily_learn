var arr = [1,4,6,2,5,8]
function bubble(arr){
	//规定规则为从小到大
	for(var i = arr.length;i > -1 ; i--){
		for(var j = 0; j < i ;j++){
           var item;
           if(arr[j]>arr[j+1]){
           	  item = arr[j]
           	  arr[j] = arr[j+1]
           	  arr[j+1] = item
           }
		}
	}
	return arr
}
let res = bubble(arr)
console.log(res)