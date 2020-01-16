var fs = require('fs');
var readline = require('readline');

function readFileToArr(fReadName, callback) {
	var fRead = fs.createReadStream(fReadName);
	var objReadline = readline.createInterface({
		input: fRead
	});
	var arr = new Array();
	objReadline.on('line', function (line) {
		arr.push(line);
	});
	objReadline.on('close', function () {
		callback(arr);
	});
}
readFileToArr('./friends.csv', function (arr) {
	let data = [];
	arr.forEach(element => {
		item = element.split(eval('/\t/'))
		data.push([item[0], item[1]])
	});
	data.shift()
	console.log('朋友圈个数', fn(data));
})
function fn(data) {
	var table = [[data[0][0], data[0][1]]]
	for (var i = 1; i < data.length; i++) {
		current = data[i]
		let flag = 0
		let onewrap = -1, twowrap = -1;
		for (var wrap = 0; wrap < table.length; wrap++) {
			for (var inner = 0; inner < table[wrap].length; inner++) {
				if (table[wrap][inner] === current[0]) {
					onewrap = wrap;
					flag++;
				}
				if (table[wrap][inner] === current[1]) {
					twowrap = wrap;
					flag++;
				}
			}
			if (flag == 2) {
				wrap = table.length
			}
		}

		switch (flag) {
			case 0:
				table.push(current)
				break;
			case 1:
				if (onewrap != -1) {
					table[onewrap].push(current[1])
				} else {
					table[twowrap].push(current[0])
				}
				break;
			case 2:
				table[onewrap] = table[onewrap].concat(table[twowrap]);
				table.splice(twowrap, 1)
				break;
			default:
				break;
		}

	}
	console.log(table)
}