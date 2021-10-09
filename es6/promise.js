async function test1() {
	return 1;
}

async function test2() {
	const d = Promise.resolve(3)
	const result = await d;
	console.log(result)
	return result
}

async function test3() {
	return Promise.resolve(5).then(d => {console.log('dafaf:', d)})
}

// const res1 = test1()
// const res2 = test2()
const res3 = test3()

console.log(res3)

// console.log(res2)

/*
async await 与 Promise 的关系
async 函数返回的都是 Promise 对象
如果 async 函数直接返回一个常量，则会被包装为一个 Promise 对象。
Promise.then 对应 await
await 常量； 相当于 Promise.resolve(4)
try {await 异步方法()} catch (e) {console.error(e)} 

*/

const ajaxUrl1 = 'https://jsonplaceholder.typicode.com/todos/1'
const ajaxUrl2 = 'https://jsonplaceholder.typicode.com/todos/2'
const ajaxUrl3 = 'https://jsonplaceholder.typicode.com/todos/3'

// const p1 = fetch(ajaxUrl1)
// const p2 = fetch(ajaxUrl2)
// const p3 = fetch(ajaxUrl3)

// const ps = [p1,p2,p3]

async function f() {
	// const a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	// const b = await fetch('https://jsonplaceholder.typicode.com/todos/2');
	// const p1 = fetch(ajaxUrl1)
	// const p2 = fetch(ajaxUrl2)
	// const [a, b] = await Promise.all([p1, p2])
	// await for(let i of ps) {
	// 	i()
	// }
	for await(let i of [1,2,3]) {
		 fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
	}
}
f()

// 使用 for 循环批量、串行执行 。不能使用 forEach 和 map，因为直接它们直接返回了。
// 并行的话，需要使用 Promise.all 或者 for await 








