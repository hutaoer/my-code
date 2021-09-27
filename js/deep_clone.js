// 深拷贝，不考虑内置对象和函数

function deep_clone(obj) {
	if(typeof obj !== 'object') return;
	var newObj = obj instanceof Array ? [] : {};
	for(let item in obj) {
		if(obj.hasOwnProperty(item)) {
			newObj[item] = typeof obj[item] === 'object' ? deep_clone(obj[item]) : obj[item]
		}
	}
	return newObj;
}


const isObject = (target) => {
	const targetType = typeof target
	return (targetType === 'object' || targetType === 'function') && targetType !== null
}
// 复杂版深克隆：基于简单版的基础上，还考虑了内置对象比如 Date、RegExp 等对象和函数以及解决了循环引用的问题。
function deep_clone_v2(obj, map = new WeakMap()) {
	if(map.get(target)) {return target}

	// 获取对象构造函数
	let constructor = target.constructor

	// 是否为正则或日期对象
	if(/^(RegExp|Date)$/i.test(constructor.name)) {
		return new constructor(target)
	}
	if(isObject(target)) {
		map.set(target, true); // 防止循环引用，先做标记
		const cloneTarget = Array.isArray(target) ? [] : {};
		for(let prop in target) {
			if(target.hasOwnProperty(prop)) {
				cloneTarget[prop] = deep_clone_v2(target[prop], map)
			}
		}
		return cloneTarget;
	} else {
		return target;
	}

}