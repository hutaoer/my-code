// 字符串模板解析

let count = 0
function render_tempate(template, data) {
	const reg = /\{\{(\w+)\}\}/;
	if(reg.test(template)) {
		const name = reg.exec(template)[1]; // 获取匹配的第一个字符串
		count++
		template = template.replace(/\{\{(\w+)\}\}/, data[name]); // 渲染第一个模板字符串。这里是否可以考虑用 replaceAll ?? replaceAll 有兼容性问题
		return render_tempate(template, data); // 递归调用
	}
	return template
}

const templateStr = '{{a}}adfadf{{a}}{{b}}dfafafa{{c}}fdafsafasf{{c}}'
const data = {
	a: 123,
	b: 456,
	c: 789
}
console.log(render_tempate(templateStr, data))
console.log(`执行了${count}次`)
// 还可以优化，
