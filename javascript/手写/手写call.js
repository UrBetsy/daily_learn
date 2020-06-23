Function.prototype.Mycall = function() {
    let argArr = [].slice.call(arguments)
    let fn = this
    let that = argArr.shift()
    let param = argArr
    that.fn = fn
    that.fn(...param)
}

const obj = {
    value: 'hdo'
}
function fn() {
    console.log(this.value)
    console.log(arguments)
}
fn.Mycall(obj, 'haha', 'gaga', '44')