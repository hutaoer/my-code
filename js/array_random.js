function array_random(arr) {
	return arr.sort(() => Math.random() - 0.5)
}

const a = [1,2,3,4,5,6,7,8,9]
console.log(array_random(a))