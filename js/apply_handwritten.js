// apply 的实现

Function.prototype.myApply = function(ctx) {
	ctx = ctx || global
	ctx.fn = this
	var args = arguments[1]
	var result = eval('ctx.fn(' + args + ')')
	delete ctx.fn
	return result
}

function say(a,b,c) {
	console.log(a,b,c)
	return a + b + c;
}


Function.prototype.apply2 = function (context, arr) {
    var context = context || global;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        console.log(args)
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}


var r = say.apply2(null, [4,5,6])
console.log(r)