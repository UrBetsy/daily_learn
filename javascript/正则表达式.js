
// 正则表达式

// \n匹配一个换行符
var patt1 = /\n/ig;
`hahahaha
`.match(patt1) // [ '\n' ]

// 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。注意 Unicode 正则表达式会匹配全角空格符。
var patt2 = /\s/ig;
`jjjj   ii`.match(patt2) // [ ' ', ' ', ' ' ]

// 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
var patt2 = /\S/ig;
let haha = `jjjj   ii`.match(patt2) // [ 'j', 'j', 'j', 'j', 'i', 'i' ]
console.log(haha)

