

const start = Date.now()
for(var i = 0;i<3;i++){
	 setTimeout(()=>{
	 	console.log(i,Date.now()-start)
	 },1000)
}