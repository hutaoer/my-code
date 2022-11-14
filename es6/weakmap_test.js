const wkmp = new WeakMap()
const k = {}
wkmp.set(k, '123')
setTimeout(() => {
	console.log(wkmp.get(k))
}, 1000)