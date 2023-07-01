var removeDuplicates = (s) => {
  const stack = []
  for(let i = 0; i < s.length; i++) {
    const tmp = s[i]
    // 取栈顶元素跟当前元素进行比较，如果相等，则出栈；不相等，则压入栈。
    if(stack.length && stack[stack.length - 1] === tmp) {
      stack.pop()
    } else {
      stack.push(tmp)
    }
  }
  return stack.join('')
}


var removeDuplicatesV2 = (s) => {
  const stack = []
  for(v of s) {
    const prev = stack.pop()
    if(prev !== v) {
      stack.push(prev)
      stack.push(v)
    }
  }
  return stack.join('')
}