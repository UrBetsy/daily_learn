function fn(){
    console.log(arguments)
    console.log(Array.prototype.slice.apply(arguments))
    console.log(...arguments)
}
fn(1,2,4)