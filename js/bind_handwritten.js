Function.prototype.myBind = function(ctx) {
	var self = this;
	var args = [].prototype.slice.call(arguments, 1);

}

Function.prototype.myBind = function (context = window) { // 原型上添加mybind方法
   // var args = Array.from(arguments) // 类数组转数组(es6) console.log(args instanceof Array)
   var argumentsArr = Array.prototype.slice.call(arguments) // 类数组转数组
   var args = argumentsArr.slice(1) // 后面的参数
   var self = this // 调用的方法本身
   return function () { // 返回一个待执行的方法
       var newArgs = Array.prototype.slice.call(arguments) // 返回函数的arguments,类数组转数组或者使用es6解构赋值
       self.apply(context, args.concat(newArgs)) // 合并两args
   }
}


// 如果是 new 操作符
Function.prototype.MyBind = function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
    var temp = function () {}
    var fn = function () {
        var newArgs = Array.prototype.slice.call(arguments)
        // 如果被new调用，this应该是fn的实例
        return self.apply(this instanceof fn ? this : (context || window), args.concat(newArgs) )
    }
    // 维护fn的原型
    temp.prototype = self.prototype
    fn.prototype = new temp()
    return fn
}
