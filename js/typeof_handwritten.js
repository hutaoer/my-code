

// 默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。
// typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function 等类型的数据，但是对于其他的都会认为是 object，比如 Null、Date 等
// Object.prototype.toString.call(new Date) 输出 [object Date]
// typeof new Date 输出 [object]

function myTypeOf(o) {
	return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
}