// 函数科里化
// 就是将使用多个参数的函数，转换成一系列使用一个参数的函数

// 举例
function add(a, b, c) {
    return a + b + c
}
add(1, 2, 3)
let addCurry = curry(add)
addCurry(1)(2)(3)


function curry(fn) {
	// 剩余参数
	let judge = (...args) => {
		if(args.length == fn.length) return fn(...args) // 展开语法
		return (...arg) => judge(...args, ...arg)
	}
	return judge
}