/*
手写继承
*/

// 原型链继承
// 存在的问题：1. 原型中包含的引用类型属性被所有实例共享；2. 子类实例化的时候不能给父类构造函数传参。

function Animal() {
	this.color = 'red'
}

function Cat() {}
Cat.prototype = new Animal()

// 借用构造函数
// 解决了原型链继承的两个问题，但是每次创建子类实例的时候，都会调用一遍父类的构造方法。
// 缺点：必须在父类构造函数中定义方法，不能重用。
// s instanceof Father 结果为 false
// 丢失了父类的原型链，子类不能调用父类原型上的方法。
function Father(name) {
	this.name = name
	this.getName = function() {
		return this.name
	}
}

function Son(name) {
	Father.call(this, name)
}

const s = new Son('h')

// 组合继承
// 而且组合继承也保留了 instanceof 操作符和 isPrototypeOf()方法识别合成对象的能力。
function SuperClass(name) {
	this.name = name
}

function SubClass(name, age) {
	SubClass.call(this, name)
	this.age = age 
}

SubClass.prototype = new SuperClass()

// 共享方法
SubClass.prototype.sayName = function() {
	console.log(this.name)
}
