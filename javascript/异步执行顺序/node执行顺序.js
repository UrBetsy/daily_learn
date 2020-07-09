setImmediate(function () {
	console.log('setImmdeiate');
});

setTimeout(() => {
	console.log('setTimeout');
}, 0);

process.nextTick(function() {
	console.log('nextTick'); 
	process.nextTick(() => {
		console.log('sub  nextTick'); 
	});
});

process.nextTick(function () {
	console.log('last nextTick');
})

new Promise((r, j) => {
	console.log('promise');
	setImmediate(function () {
		console.log('then'); 
	});
	r();
}).then(() => {
	process.nextTick(function() {
		console.log('promise nextTick');
	}); 
});
  
console.log('console'); 