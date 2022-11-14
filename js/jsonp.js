// 手写jsonp

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