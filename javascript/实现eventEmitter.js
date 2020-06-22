// nodejs中有一个时间对象eventEmitter，可以绑定并且触发时间
// 请实现这个功能

class Event {
    constructor() {
        this.events = {}
    }
    
    on(event, callback) {
        this.events[event] = this.events[event] || []
        this.events[event].push(callback)
    }

    emit(event, param) {
        this.events[event] = this.events[event] || []
        this.events[event].forEach(callback => {
            callback.call({}, param)
            callback.once && this.off(event, callback) 
        });
    }

    off(event, callback) {
        if(this.events[event]) {
            if (callback ===  undefined) {
                this.events[event] = []
            } else {
                this.events[event] = this.events[event].filter(cb => {
                    return cb !== callback
                })
            }
        }
    }

    once(event, callback) {
        callback.once = true
        this.on(event, callback)
    }
}
let event = new Event()
function listener1(para) {
    console.log('这里是listener1', para)
}
function listener2(para) {
    console.log('这里是listener2', para)
}
event.on('hahah', listener1)
event.once('hahah', listener2)
event.emit('hahah', '我是参数')
event.emit('hahah', '我是参数2')