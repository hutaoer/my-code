function randomString(n) {
	n = n || 32
	const s = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz1234567890"
	const sLen = s.length;
	let result = ''
	for(let i = 0; i < n; i++) {
		result += s.charAt((Math.floor(Math.random() * sLen)))
	}
	return result
}

function getRandomNum(min, max) {
	const range = max - min;
	const rand = Math.random()
	return min + Math.round(range * rand)
}


const s = randomString(10)
console.log(s)

var num = getRandomNum(10000,999999);
console.log(num);