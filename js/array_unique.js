// 数组去重

// es5 实现
// 先查找当前元素的索引，并只返回查到的第一个索引和当前元素索引相等的值
function array_unique(arr) {
	return arr.filter(function(item, idx, self) {
		console.log(arr, self)
		console.log('================')
		// 使用 arr 和 self 好像没有区别？？
		return self.indexOf(item) === idx
	})
}




// es6实现
// 利用 set key 的唯一性
function array_unique_v2(arr) {
	return [...new Set(arr)]
}

const a = [1,1,1,2,2,3,4,5,5]
console.log(array_unique_v2(a))