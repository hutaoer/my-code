class EventEmitter {
  constructor(){
    // { eventType: [ handler1, handler2 ] }
    this.subs = {}
  }
  // 订阅通知
  $on(eventType, fn) {
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(fn)
  }
  // 发布通知
  $emit(eventType) {
    if(this.subs[eventType]) {
      this.subs[eventType].forEach(v=>v())
    }
  }
}

// 测试
var bus = new EventEmitter()

// 注册事件
bus.$on('click', function () {
  console.log('click')
})

bus.$on('click', function () {
  console.log('click1')
})

// 触发事件 
bus.$emit('click')
