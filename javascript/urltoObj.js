 var url = 'https://baijiahao.baidu.com/s?id=1581219666891923895&wfr=spider&for=pc'
 function urlToObj(param){
 	var domain = param.split('?')[0]
 	console.log(domain)
    var ref = param.split('?')[1]
    var arr = ref.split('&')
    var json = {}
    for(item in arr){
    	json[arr[item].split('=')[0]] = arr[item].split('=')[1]
    }
    console.log(json)
 }
 urlToObj(url)