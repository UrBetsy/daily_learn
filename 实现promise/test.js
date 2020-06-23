
  var MyPromise = require('./MyPromise.js');
//测试
  // console.log(Reflect.ownKeys(MyPromise))
  // console.log(MyPromise.length)
  // let length1 = Symbol()
  // MyPromise[length1] = 2
  // console.log(MyPromise.length1)

  let prpr = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
      resolve('我是resolve')
    }, 100);
      // console.log('start new Promise...');
      // var timeOut = Math.random() * 2;
      // console.log('set timeout to: ' + timeOut + ' seconds.');
      // resolve('wo')
      // setTimeout(function () {
      //     if (timeOut < 1) {
      //         console.log('call resolve()...');
      //         resolve('200 OK');
      //     }
      //     else {
      //         console.log('call reject()...');
      //         reject('timeout in ' + timeOut + ' seconds.');
      //     }
      // }, timeOut * 1000);
  }).then(function (r) {
      console.log('我是then', r)
      return 'haha'
  })
  console.log('prpr',prpr)
  // .then(res=> {
  //   console.log(res)
  // }).catch(function (reason) {
  //     console.log('Failed: ' + reason);
  // });

//测试catch
  // var promise1 = new MyPromise(function(resolve, reject) {
  //   throw 'Uh-oh!';
  // });

  // promise1.catch(function(error) {
  //   console.log(error);
  // });// expected output: Uh-oh!

//测试all
  // let p1 = new MyPromise((resolve, reject) => {
  //   resolve('成功了')
  // })

  // let p2 = new MyPromise((resolve, reject) => {
  //   resolve('success')
  // })

  // let p3 = MyPromise.reject('失败')

  // MyPromise.all([p1, p2]).then((result) => {
  //   console.log(result)              
  // }).catch((error) => {
  //   console.log(error)
  // })

  // MyPromise.all([p1,p3,p2]).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)      
  // })

//测试race 可修改setTimeout的时间验证结果
  // let p1 = new MyPromise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('success')
  //   },100)
  // })

  // let p2 = new MyPromise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('failed')
  //   }, 500)
  // })

  // MyPromise.race([p1, p2]).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)  
  // })

//测试链式then和finally
  // let p = new MyPromise((resolve, reject) => {
  //     setTimeout(resolve, 1000, 'success');
  // });
  // p.then(
  //     res => {
  //       console.log(res);
  //       return `${res} again`;
  //     }
  //   ).then(
  //     res=>{
  //       console.log(res)
  //     }
  //   ).finally(
  //       console.log('finally')
  //     );