class Dep {
	constructor() {
		this.subs = []
	}
	// 添加观察者
	addSub(sub) {
		if(sub && sub.update) {
			this.subs.push(sub)
		}
	}
	notify() {
		this.subs.forEach(sub => sub.update())
	}
}

class Watcher {
	update() {
		console.log('update')
	}
}

let dep = new Dep()
let watcher = new Watcher()
dep.addSub(watcher)
dep.notify()