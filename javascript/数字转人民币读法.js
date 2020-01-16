var cnNum = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
function convertIntNumber(integer) {
	var cnIntBasicUnits = new Array('', '拾', '佰', '仟');
	var cnIntExtendUnits = new Array('', '万', '亿', '兆');
	var intStr = '';

	if (parseInt(integer, 10) > 0) {
		var zeroCount = 0;
		var intLen = integer.length;
		for (var i = 0; i < intLen; i++) {
			let num = integer.substr(i, 1);
			var numLength = intLen - i - 1;
			var extendUnitIdx = numLength / 4;
			var basicUnitIdx = numLength % 4;

			if (num == '0') {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					intStr += cnNum[0];
				}

				zeroCount = 0;
				intStr += cnNum[parseInt(num)] + cnIntBasicUnits[basicUnitIdx];
			}
			if (basicUnitIdx == 0 && zeroCount < 4) {
				intStr += cnIntExtendUnits[extendUnitIdx];
			}
		}
	}

	return intStr;
}

function convertDecimalNumber(decimal) {
	var decimalStr = '';
	var cnDecUnits = new Array('角', '分', '毫', '厘');

	if (decimal != '') {
		var decLen = decimal.length;
		for (var i = 0; i < decLen; i++) {
			let num = decimal.substr(i, 1);
			if (num != '0') {
				decimalStr += cnNum[Number(num)] + cnDecUnits[i];
			}
		}
	}

	return decimalStr;
}

function convertNumber(number) {
	var cnInteger = '整';
	var cnIntLast = '元';
	var maxNum = 999999999999999.9999;
	var integerNum;
	var decimalNum;
	var chineseStr = '';
	var parts;

	if (number == '') { return '请输入要转化的数字！'; }

	number = parseFloat(number);

	if (isNaN(number)) {
		return '请输入正确的数字！';
	}

	if (number >= maxNum) {
		return '超出最大处理数字！';
	}

	if (number == 0) {
		chineseStr = cnNum[0] + cnIntLast + cnInteger;
		return chineseStr;
	}

	number = number.toString();

	if (number.indexOf('.') == -1) {
		integerNum = number;
		decimalNum = '';
	} else {
		parts = number.split('.');
		integerNum = parts[0];
		decimalNum = parts[1].substr(0, 4);
	}

	chineseStr += convertIntNumber(integerNum) + cnIntLast;
	chineseStr += convertDecimalNumber(decimalNum);

	if (chineseStr == '') {
		chineseStr += cnNum[0] + cnIntLast + cnInteger;
	} else if (decimalNum == '') {
		chineseStr += cnInteger;
	}

	return chineseStr;
}

function numberToMoney(param) {
	var money = convertNumber(param);
	console.log(money)
}

numberToMoney('20000.01')