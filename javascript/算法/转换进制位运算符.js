/**
 * 十进制转十六进制
 */
function trans() {
    let i;
    let temp = 0;
    let res = '';
    for( i = 7; i >= 0; i -- )
    {
        temp = ( n >> 4 * i ) & 15;//和 1111(二进制) 进行与运算，得到十六进制的最后一位；//右移四位，继续与运算。
        if ( temp > 9) {
            res += temp-10+'A';
        } else {
            res += temp;  
        }
    }
    return res;
}

let n = 16;
console.log(trans(n));