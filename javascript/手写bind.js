// var obj = {name:"Smiley"};
// var greeting = function(str, lang){
//     this.value = 'greetingValue';
//     console.log("Welcome "+this.name+" to "+str+" in "+lang);
// };
// var objGreeting = greeting.bind(obj, 'the world'); 

// objGreeting('JS');
// var newObj = new objGreeting('JS');
// console.log(newObj.value);


Function.prototype.myBind = function() {
    var thatFunc = this;
    var argArr = [].slice.call(arguments)
        that = argArr.shift();
        thatArgs = argArr;
    if (typeof thatFunc !== 'function') {
        throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }

    var fBound  = function() {
        return thatFunc.apply(this instanceof fBound
                 ? this
                 : that,
                 thatArgs.concat(Array.prototype.slice.call(arguments)));
    };
    var fNOP = function() {};
    if (thatFunc.prototype) {
      fNOP.prototype = thatFunc.prototype; 
    }
    fBound.prototype = new fNOP();
    return fBound;
}

let obj = {name: 'fanfan'}
function getName(age) {
    console.log(this.name, age)
}
getName()
let bindFun = getName.myBind(obj, 23)
bindFun()