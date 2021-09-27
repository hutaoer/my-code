// 浅copy
// 仅仅考虑对象类型，复制第一层
function shallow_copy(target) {
	if(typeof target !== 'object') return 
	// 判断数组还是对象
	let newObj = target instanceof Array ? [] : {};
	// 使用 for in 遍历对象或数组
	for(let item in target) {
		if(target.hasOwnProperty(item)) {
			newObj[item] = target[item]
		}
	}
	return newObj
}

var target = {
	name: 'hutaoer',
	list: [1,2,3]
}

var newObj = shallow_copy(target)
console.log(newObj)
console.log(newObj.list === target.list)