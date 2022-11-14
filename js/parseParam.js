// 解析 url 参数

function parseParam(url) {
	// 匹配问号后面的字符串
	const paramStr = /.+\?(.+)$/.exec(url)[1];
	const paramArr = paramStr.split('&');
	let paramObj = {}
	paramArr.forEach(param => {
		if(/=/.test(param)) {
			let [key, val] = param.split('=')
			var = decodeURIComponent(val)
			if(paramObj.hasOwnProperty((key))) {
				paramObj[key] = [].concat(paramObj[key], val)
			} else {
				paramObj[key] = val
			}
		} else {
			// 没有value的场景
			paramObj[param] = true
		}
	})
	return paramObj
}