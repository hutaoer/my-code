function MyObject() {
	this.showMe = function() {console.log(typeof this)}
}
MyObject.prototype = null


var o = new MyObject
o.showMe()

try {
	console.log(Object.getPrototypeOf(o))

} catch(e) {
	console.log(e)
}
