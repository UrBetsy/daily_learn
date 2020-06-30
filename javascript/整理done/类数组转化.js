function fn(){
    console.log(arguments)
    console.log(Array.prototype.slice.apply(arguments))
    console.log([...arguments])
    console.log(Array.from(arguments))
}
fn(1,2,4)