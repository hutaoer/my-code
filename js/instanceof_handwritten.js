/*
判断一个对象是否为某个类型的实例。
就是判断构造函数的 prototype 属性是否出现在实例的原型链上
null 和 undefined 不存在 __proto__ 属性
*/
function myInstanceof(obj, cls) {
	let proto = obj.__proto__
	while(true) {
		if(proto === null) return false
		if(proto === cls.prototype) {
			return true
		}
		proto = proto.__proto__
	}
}