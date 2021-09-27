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