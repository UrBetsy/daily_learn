/**
 * 参考资料：https://es6.ruanyifeng.com/#docs/proxy
 */
var obj = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
});

obj.count = 1
++obj.count
/**
 * 执行结果
 * setting count!
 * getting count!
 * setting count!
 */