// 手写jsonp
//  jsonp原理：因为jsonp发送的并不是ajax请求，其实是动态创建script标签 script标签是没有同源限制的，把script标签的src指向请求的服务端地址。
const jsonp = ({url, params, callback}) => {
	// 拼接 url
	const generateUrl = () => {
		let dataSrc = ''
		for(let k in params) {
			if(params.hasOwnProperty(k)) {
				dataSrc += `${k}=${params[k]}&`
			}
		}
		dataSrc += `callback=${callback}`
		return `${url}?${dataSrc}`
	}

	return new Promise((resolve, reject) => {
		const scriptElemnt = document.createElement('script')
		scriptElemnt.src = generateUrl()
		document.body.appendChild(scriptElemnt)
		window[callback] = data => {
			resolve(data)
			document.removeChild(scriptElemnt)
		}
	})

}

function jsonp({url, params, callback}) {
	const generateUrl = () => {
		let str = ''
		for(let k in params) {
			if(params.hasOwnProperty(k)) {
				str += `${k}=${params[k]}&`
			}
		}
		str +=`callback=${callback}`
		return `${url}?${str}`
	}

	return new Promise((resolve, reject) => {
		const scriptElemnt = document.createElement('script')
		scriptElemnt.src = generateUrl()
		document.body.appendChild(scriptElemnt)
		//全局函数 由script请求后台，被调用的函数，只有后台成功响应才会调用该函数
		window[callback] = data => {
			resolve(data)
			document.removeChild(scriptElemnt)
		}
	})
}

// 参考：https://juejin.cn/post/6844903710494031880