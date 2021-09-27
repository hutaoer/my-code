// 数组扁平化

function array_flatten(arr) {
	var result = []
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			result = result.concat(array_flatten(arr[i]))
			// result = [...result, ...array_flatten(arr[i])]
		} else {
			result.push(arr[i])
		}
	}
	return result
}

// es6 实现
function array_flatten_v2(arr) {
	// const res = arr.some(item => Array.isArray(item))
	// console.log(res)

	// 不断的查询数组中还存在的数组元素，并进行展开合并
	while(arr.some(item => Array.isArray(item))) {
		// 使用展开语法
		// 展开语法, 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。
		arr = [].concat(...arr)
	}
	return arr
}

// ES6 使用 flat
var a = [1,2,[3,4], [4,5,]]



console.log(array_flatten_v2(a))