function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
       console.log(this.name)
    }
}

var person = new Person('Nicholas', 29, 'Front-end developer'); 
console.log(person)

function myNew() {
    var constr = Array.prototype.shift.call(arguments);  // 构造函数
    var obj = Object.create(constr.prototype); // 一个空对象
    var result = constr.apply(obj, arguments); // 执行构造函数（构造函数也是普通函数）
    return result instanceof Object? result : obj; // 构造函数有返回的话return，不然直接返回这个对象
}

var person1 = myNew(Person, 'Nicholas', 29, 'Front-end developer')
console.log(person1)
