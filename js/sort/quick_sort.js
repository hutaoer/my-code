// 自己实现

function quickSort(arr) {
	const len = arr.length;
	if(len === 1) return arr;
	const midIdx = Math.floor(len / 2)
	const mid = arr[midIdx]
	let tmp1 = [], tmp2 = []
	for(let i = 0; i < len; i++) {
		if(i === midIdx) continue;
		if(arr[i] < mid) {
			tmp1.push(arr[i])
		} else {
			tmp2.push(arr[i])
		}
	}
	if(tmp1.length) {
		tmp1 = quickSort(tmp1)
	}
	if(tmp2.length) {
		tmp2 = quickSort(tmp2)
	}
	// tmp1 = quickSort(tmp1)
	// tmp2 = quickSort(tmp2)
	return [...tmp1, mid, ...tmp2]

}

const arr = [11,10,2,3,33,99,55,55,40,1,4,5,9]
const res = quickSort(arr)
console.log(res)