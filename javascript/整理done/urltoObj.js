/**
 * 解析url的参数，将参数以键值对的格式输出
 */
function urlToObj(param) {
 	var domain = param.split('?')[0]
   var ref = param.split('?')[1]
   var arr = ref.split('&')
   var json = {}
   for(item in arr){
      json[arr[item].split('=')[0]] = arr[item].split('=')[1]
   }
   return json
 }
var url = 'https://baijiahao.baidu.com/s?id=1581219666891923895&wfr=spider&for=pc'
let json = urlToObj(url)
console.log(json)