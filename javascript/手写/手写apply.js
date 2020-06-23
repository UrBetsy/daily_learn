Function.prototype.Myapply = function() {
    let argArr = [].slice.call(arguments)
    let fn = this
    let that = argArr.shift()
    let param = argArr.shift()
    that.fn = fn
    that.fn(param)
}

const obj = {
    value: 'hdo'
}
function fn() {
    console.log(this.value)
    console.log(arguments)
}
fn.Myapply(obj, ['haha', 'gaga', '44'])