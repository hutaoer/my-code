// new 实现过程
/*
1. 创建一个新的空对象
2. 把 this 绑定到空对象
3. 把空对象的 __proto__ 指向 构造函数的 prototype
4. 执行构造函数，为空对象添加属性
5. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。
*/

// 第一种
const myNew = (Con, ...args) => {
// 创建一个空对象
    const obj = {}
// 给这个对象指定原型链
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
}
//第二种
function myNew(Cons,...args){ 
    let obj = {}; 
    obj.__proto__ = Cons.prototype; //执行原型链接 
    let res = Cons.call(obj,args); 
    return typeof res === 'object' ? res : obj; 
} 
// 第三种
function myNew () {
  //创建一个新对象
  let obj  = {};
  //获得构造函数
  let Con = [].shift.call(arguments);
  //链接到原型（给obj这个新生对象的原型指向它的构造函数的原型）
  obj.__proto__ = Con.prototype;
  //绑定this
  let result = Con.apply(obj,arguments);
  //确保new出来的是一个对象，因为Con执行的结果会返回当前实例
  return typeof result === "object" ? result : obj
}
  function Person (name,age){
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log("I am " + this.name)
    }
}
//测试
let p = myNew (Person,"Curry",18);
// console.log(person2.name);      //"Curry"
// console.log(person2.age);       //18
// person2.say();      //"I am Curry"
