var str = 'aabbcc'
function mostOfStr(param){
	var most = '00'
	while(param){
		var head = param[0]
		head = eval("/"+head+"/g") 
		var num = str.match(head).length
		if(num > most[1]){
			most = param[0]+num+''
			most = most.slice(0,2)
		}else if( num == most[1]){
			most = most + param[0]+num
		}

		param = param.replace(eval(head),'')
		console.log(param)
		console.log(most)
	}
}
mostOfStr(str)


// function deleConv(param){

// }