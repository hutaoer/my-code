/*
  ECMAScript 5 通过增加 Object.create()方法将原型式继承的概念规范化了。
  这个方法接收两个参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选）。在只有一个参数时，
Object.create()与这里的 myCreate()方法效果相同。
  属性中包含的引用值始终会在相关对象间共享，跟使用原型模式是一样的。
  浅复制意味着只会复制对象的引用
*/


function myCreate(o) {
	function F() {}
	F.prototype = o
	return new F();
}


let person = {
	name: 'kobe',
	list: [1,2]
}

let p = Object.create(person)
// p.name = 'hutaoer'
p.list.push(33)
console.log(p.hasOwnProperty('list'))
console.log(p.hasOwnProperty('name'))

console.log(person)
// let p1 = Object.create(person)
// p1.name = 'james'
// p1.list.push(3)

// let p2 = Object.create(person)
// console.log(person)

// let p3 = myCreate(person)
// let p4 = myCreate(person)
// person.name = 'oneal'
// p3.list.unshift(0)
// console.log(person)


// let p5 = {}
// p5.d = person

// console.log(person)

// function F() {}
// F.prototype = person

// let p3 = new F()
// p3.name = 'jordan'

// console.log(person)



