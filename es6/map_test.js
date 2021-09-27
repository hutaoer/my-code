const sourceData = [
	["key1", "value3"],
	["key2", "value2"],
	["key3", "value3"],
]

const sourceData1 = [
	["key2", "value2"],
	["key1", "value1"],
	["key3", "value3"],
]

const m = new Map(sourceData)
// const m1 = new Map(sourceData1)

// for (let pair of m.entries()) { 
//  	console.log(pair); 
// }

// for (let pair of m1.entries()) {
// 	console.log(pair)
// }
// m.clear()
console.log(m.size)

for(let item of m) {
	console.log(item)
}

// for (let k of m.keys()) {
// 	console.log(`k: ${k}`, `value: ${m.get(k)}`)
// }

// console.log(m.keys())
// console.log(m.values())

const a = 0/"";
const b = 0/"";
m.set(a, 123)
m.set(b, 456)
m.set(NaN, 789)
m.set(NaN, 1010)
// 这里 a 和 b 是同一个key ??
console.log(m)
