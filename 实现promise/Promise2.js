const PENDIND = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

function MyPromise(executor) {
    let self = this;
    self.state = PENDIND;
    self.value = null;
    self.reason = null;

    self.onFulfilledCallbacks = [];
    self.onRejectedCabllbacks = [];

    function resolve (value) {
        setTimeout(() => {
            if (self.state === PENDIND) {
                self.state = FULFILLED;
                self.value = value
                self.onFulfilledCallbacks.forEach(callback => {
                    callback(self.value)
                });
            }
        }, 0) 
    }
    function reject (reason) {
        setTimeout(() => {
            if (self.state === PENDIND) {
                self.state = REJECT;
                self.reason = reason;
                self.onRejectedCabllbacks.forEach(callback => {
                    callback(self.reason)
                })
            }
        }, 0)
    }

    try {
        executor(resolve, reject) 
    } catch (reason){
        reject(reason)
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    let promise2 = handle(this, onFulfilled, onRejected)
    return promise2
}
MyPromise.prototype.catch = function(onRejected) {
    let promise3 = this.then(null, onRejected)
    return promise3;
}
MyPromise.prototype.all = function(list) {
    let _this = this;
    return new MyPromise(function(resolve, reject) {
        let values = []
        let count = 0;
        for (let [i, p] of list.entries()) {
            // console.log(_this.resolve)
            _this.resolve(p)
            .then(
                function(res) {
                    values[i] = res
                    count ++;
                    if (count === list.length) 
                    resolve(values)
                }
            )
        }
    })
}
MyPromise.prototype.race =function (list) {
    let _this=this
    return new MyPromise(function(resolve, reject) {
      for (let p of list) {
        // 只要有一个实例先改变状态，新的MyPromise的状态就跟着改变
        _this.resolve(p).then(function(res){
          resolve(res)
        }, function(err) {
          reject(err)
        })
      }
    })
}
//MyPromise.resolve
MyPromise.prototype.resolve =function (value) {
    console.log('我是实例')
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(function(resolve ,reject){
      resolve(value)
    })
}
//MyPromise.reject
MyPromise.reject = function (value) {
    return new MyPromise(function(resolve ,reject){
      reject(value)
    })
}

function handle (_self, onFulfilled, onRejected) {
    const { value, reason, state } = _self
    return new MyPromise ((nexFulFilled, nextRejected) => {
        var fulfilled = function(value) {
            try {
                let res = onFulfilled(value);
                nexFulFilled(res)
            } catch(err) {
                nextRejected(err)
            }
        }
        var rejected = function(reason) {
            try {
                let res = onRejected(reason);
                nexFulFilled(res);
            } catch(err) {
                nextRejected(err);
            }
        }
        switch (state) {
            case PENDIND:
                _self.onFulfilledCallbacks.push(fulfilled);
                _self.onRejectedCabllbacks.push(rejected);
                break
            case FULFILLED:
                fulfilled(value);
                break
            case REJECT:
                rejected(reason);
                break
        }
    })
}

// let pro = new MyPromise((resolve, reject) => {
//     // resolve('haha')
//     reject('我是报错')
// }).catch(err => {
//     console.log('我是catch', err)
// })
// // .then(res => {
// //     console.log('这里是第一个then', res)
// //     return 'an tore'
// // }).then(res => {
// //     console.log('我是第二个then', res)
// // })

// let p1 = new MyPromise((resolve, reject) => {
//     resolve('成功了')
// })

// let p2 = new MyPromise((resolve, reject) => {
//     resolve('success')
// })
let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    },100)
  })

  let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject('failed')
    }, 500)
  })

  MyPromise.prototype.race([p1, p2]).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)  
  })

// let p3 = MyPromise.reject('失败')

// MyPromise.prototype.all([p1, p2]).then((result) => {
//     console.log(result)              
// }).catch((error) => {
//     console.log(error)
// })

// MyPromise.prototype.all([p1,p3,p2]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)      
// })

console.log('我是同步')