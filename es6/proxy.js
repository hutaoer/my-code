const boby = {
	name: 'huyilin'
}


const handler = {
	get(target, property, receiver) {
		console.log('1',arguments)
		console.log('2',[...arguments])
		return Reflect.get(...arguments)
	},

}

const proxy = new Proxy(boby, handler)

proxy.name