  //判断是否为function
  const isFunction = function (variable){
    return typeof variable === 'function'
  } 
  //三种状态常量
  const PENDING = 'PENDING'
  const FULFILLED = 'FULFILLED'
  const REJECTED = 'REJECTED'
 
  //构造函数MyPromise
  function MyPromise (executor) {
    if (typeof this !== 'object') {
      throw new TypeError('Promises must be constructed via new');
    }
    if (!isFunction(executor)) {
      throw new TypeError('Promise constructor\'s argument is not a function');
    }
    
    this._status = PENDING
    this._value = undefined
    this._fulfilledQueues = []
    this._rejectedQueues = []
    doExecutor(executor,this);
  }

  //val是executor的function类型的参数的参数
  function _resolve (val) {
    let _this=this
    const run = function() {
      if (_this._status !== PENDING) return
      // 依次执行成功队列中的函数，并清空队列
      const runFulfilled = function(value) {
        let callback;
        while (callback = _this._fulfilledQueues.shift()) {
          callback(value)
        }
      }
      // 依次执行失败队列中的函数，并清空队列
      const runRejected = function(error){
        let callback;
        while (callback = _this._rejectedQueues.shift()) {
          cb(error)
        }
      }
      // resolve的参数是否为Promise对象
      if (val instanceof MyPromise) {
        val.then( function(value) {
          _this._value = value
          _this._status = FULFILLED
          runFulfilled(value)
        }, function(err) {
          _this._value = err
          _this._status = REJECTED
          runRejected(err)
        })
      } else {
        _this._value = val
        _this._status = FULFILLED
        runFulfilled(val)
      }
    }
    setTimeout(run, 0)
  }

  //function _reject
  function _reject (err,_self) { 
    let _this
    if(_self){
      _this=_self
    }else{
      _this=this
    }
    
    if (_this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    const run = function() {
      this._status = REJECTED
      this._value = err
      let callback;
      while (callback = _this._rejectedQueues.shift()) {
        callback(err)
      }
    }
    setTimeout(run, 0)
  }

  //MyPromise.prototype.then
  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    return handle(this,onFulfilled, onRejected)
  }

  function handle(_self,onFulfilled, onRejected) {
    const { _value, _status } = _self
    
    return new MyPromise(function(onFulfilledNext, onRejectedNext) {
      
      let fulfilled = function (value){
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res =  onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          onRejectedNext(err)
        }
      }
      
      let rejected = function (error){
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
              let res = onRejected(error);
              if (res instanceof MyPromise) {
                // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                res.then(onFulfilledNext, onRejectedNext)
              } else {
                //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                onFulfilledNext(res)
              }
          }
        } catch (err) {
          onRejectedNext(err)
        }
      }

      switch (_status) {
        case PENDING:
          _self._fulfilledQueues.push(fulfilled)
          _self._rejectedQueues.push(rejected)
          break
        case FULFILLED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }
    })
  }

  //MyPromise.prototype.catch
  MyPromise.prototype.catch =function (onRejected){
    return handle(this,undefined, onRejected)
  }

  //MyPromise.resolve
  MyPromise.resolve =function (value) {
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

  //MyPromise.all 
  MyPromise.all =function (list) {
    let _this=this
    return new MyPromise(function(resolve, reject) {
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
          _this.resolve(p).then(function(res) {
            values[i] = res
            count++
            if (count === list.length) resolve(values)
          }, function(err) {
            reject(err)
          })
      }
    })
  }
  // MyPromise.race
  MyPromise.race =function (list) {
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
  //MyPromise.prototype.finally
  MyPromise.prototype.finally = function (callback) {
    return handle(this,
      function(value){
        MyPromise.resolve(callback())
        .then(function(){
          return value
        })
      } ,
      function(reason) {
        MyPromise.resolve(callback())
        .then(function() { 
          throw reason 
        })
      } 
    )
  }

  function doExecutor(executor,promise){
    try {
      executor(_resolve.bind(promise), _reject.bind(promise)) 
    } catch (err) {
      _reject(err,promise)
    }
  }
  module.exports = MyPromise;






