// 手写 call 

Function.prototype.myCall = function(ctx) {
	var ctx = ctx || window
	ctx.fn = this
	var args = []
	// 将数组转成元素
	for(var i = 1, len = arguments.length; i < len; i++) {
		args.push('arguments[' + i + ']')
	}
	console.log(args)
	var result = eval('ctx.fn(' + args + ')')
	delete ctx.fn;
	return result;
}

function say(a,b,c) {
	console.log(a,b,c)
	return a + b + c;
}

say.myCall(null, 4,5,6)