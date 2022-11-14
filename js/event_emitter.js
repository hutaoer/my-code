// 事件总线（发布订阅模式）
 
class EventEmitter {
	constructor() {
		this.cache = {}
	}
	on(name, fn) {
		if(this.cache[name]) {
			this.cache[name].push(fn)
		} else {
			this.cache[name] = [fn]
		}
	}
	off(name, fn) {
		let tasks = this.cache[name];
		if(tasks) {
			const index = tasks.findIndex(f => f === fn || f.callback === fn)
			if(index) {
				tasks.splice(index, 1)
			}
		}
	}
	emit(name, once = false, ...args) {
		if(this.cache[name]) {
			let tasks = this.cache[name].slice()
			for(let fn of tasks) {
				fn(...args)
			}
			if(once) {
				delete this.cache[name]
			}
		}
	}
}

// class EventEmitter {
//     constructor() {
//         this.cache = {}
//     }
//     on(name, fn) {
//         if (this.cache[name]) {
//             this.cache[name].push(fn)
//         } else {
//             this.cache[name] = [fn]
//         }
//     }
//     off(name, fn) {
//         let tasks = this.cache[name]
//         if (tasks) {
//             const index = tasks.findIndex(f => f === fn || f.callback === fn)
//             if (index >= 0) {
//                 tasks.splice(index, 1)
//             }
//         }
//     }
//     emit(name, once = false, ...args) {
//         if (this.cache[name]) {
//             // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
//             let tasks = this.cache[name].slice()
//             for (let fn of tasks) {
//                 fn(...args)
//             }
//             if (once) {
//                 delete this.cache[name]
//             }
//         }
//     }
// }

let eventBus = new EventEmitter()
let fn1 = function(name, age) {
	console.log(`hutaor is ${name}, age is ${age}` )
}
let fn2 = function(name, age, salary = 333) {

	console.log(`${name} age is ${age}, salary is ${salary}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)

eventBus.emit('aaa', false, 'hutaoer', 33)

eventBus.emit('aaa', false, 'hutaoer', 33)