// Array.prototype.mySome = function(fn) {
//     let arr = this
//     let res = false
//     var t = Object(this);
//     console.log(t)
//     for([n, v] of arr.entries()) {
//         if(fn(v, n, arr)) {
//             res = true
//             break
//         }
//     }
//     return res
// }

// MDN 官方的ployfill
Array.prototype.mySome = function(fun/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };


const array = [1, 2, 3, 4, 5];

const even = (element, index, arr) => {
    return element % 2 === 0; 
}
let res = array.mySome(even)
console.log(res)
