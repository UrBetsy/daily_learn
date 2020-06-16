 
// 参考 https://segmentfault.com/a/1190000015405468

// 发布者
let publisher = {
  registration: {},
  subscribe: function (type, fn) {
    if (Object.keys(this.registration).indexOf(type) === -1) {
      this.registration[type] = [];
    }
    this.registration[type].push(fn);
  },
  unSubscribe: function (type, fnName) {
    if (Object.keys(this.registration).indexOf(type) >= 0) {
      let index = this.registration[type].findIndex(func => func.name === fnName.name)
      index > -1 ? this.registration[type].splice(index, 1) : null
    }
  },
  publish: function (type, message) {
    if (Object.keys(this.registration).indexOf(type) >= 0) {
      this.registration[type].forEach(fn => {
        fn(message)
      });
    }
  }
}

let subscriberA = message => {
  console.log(`A收到通知：${message}`)
};

let subscriberB = message => {
  console.log(`B收到通知：${message}`)
};

let subscriberC = message => {
  console.log(`C收到通知：${message}`)
};

publisher.subscribe('game', subscriberA);
publisher.subscribe('game', subscriberB);
publisher.subscribe('game', subscriberC);
publisher.unSubscribe('game', subscriberC);

publisher.subscribe('haha', subscriberA)
publisher.publish('game', '这里是收到的信息')
publisher.publish('haha', '这里是haha')