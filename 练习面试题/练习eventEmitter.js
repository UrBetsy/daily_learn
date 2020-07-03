class MyEventEmitter {
    constructor() {
        this.events = {}
    }
    on (name, callback) {
        let events = this.events
        if (!events[name]) {
            events[name] = []
        }
        events[name].push(callback)
    }
    emit (name, arg) {
        let events = this.events
        if(name && events[name] && events[name].length) {
          events[name].forEach(item => {
            item.call({}, arg)  
          })
        }
    }
    off (name, callback) {
      if (name && this.events[name] && this.events[name].length) {
        this.events[name] = this.events[name].filter(cb => {
          return cb !== callback
        })
      }
    }
}
  
  let ob = new MyEventEmitter()
  let test1 = (age) => {
    console.log('hahah', age)
  }
  let test2 = (age) => {
    console.log('heheh', age)
  }
  ob.on('haha', test1)
  ob.on('haha', test2)
  ob.emit('haha', 14);
  ob.off('haha', test2)
  ob.emit('haha', 14);