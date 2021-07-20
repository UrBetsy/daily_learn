function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    })
}

function walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        defineReactive(obj, keys[i])
    }
}
/**
 * Define a reactive property on an Object.
 */
export function defineReactive ( obj, key, val, customSetter, shallow) {
    const dep = new Dep()
  
    /**
     * 方法返回指定对象上一个自有属性对应的属性描述符
     */
    const property = Object.getOwnPropertyDescriptor(obj, key)
    /**
     * 对象的该属性不能变更
     */
    if (property && property.configurable === false) {
      return
    }
  
    // cater for pre-defined getter/setters
    const getter = property && property.get
    const setter = property && property.set

    /**
     * 如果只传了obj和key，那么val = obj[key]
     */
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key]
    }
  
    let childOb = !shallow && observe(val)

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            const value = getter ? getter.call(obj) : val
            if (Dep.target) {
                dep.depend()
                if (childOb) {
                    childOb.dep.depend()
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
      set: function reactiveSetter (newVal) {
            const value = getter ? getter.call(obj) : val
            /* eslint-disable no-self-compare */
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            /* eslint-enable no-self-compare */
            if (process.env.NODE_ENV !== 'production' && customSetter) {
                customSetter()
            }
            // #7981: for accessor properties without setter
            if (getter && !setter) return
            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            childOb = !shallow && observe(newVal)
            dep.notify()
      }
    })
}
class Observer {
    constructor(value) {
        this.value = value;
        /**
         * 并且给value新增一个__ob__属性，值为该value的Observer实例。
         * 这个操作相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
         */
        def(value, '__ob__', this)
        // 判断类型，添加监听方法
        if (Array.isArray(value)) {
            // 数组的话
            // if (hasProto) {
            //     protoAugment(value, arrayMethods)
            // } else {
            //     copyAugment(value, arrayMethods, arrayKeys)
            // }
            // this.observeArray(value)
        } else {
            // 对象的话
            this.walk(value)
        }
    }
}

const haha = new Observer({ type: 0 });
console.log(haha.value.__ob__);
