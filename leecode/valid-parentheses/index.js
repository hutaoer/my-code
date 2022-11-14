var isValid = (s) => {
  var leftParentheses = ["{", "(", "["];
  var m = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  var stack = [];

  for (let i in s) {
    // 判断是否为 '{[(' 这种左括号
    if (m[s[i]]) {
      stack.push(s[i]);
    } else {
      var tmp = stack.pop();
      if (s[i] != m[tmp]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

function solution(n) {
  var s = _generateParenthese(0, 2 * n, "");

  function _generateParenthese(level, max, s) {
    if (level >= max) {
      console.log(s);
      return;
    }
    _generateParenthese(level + 1, max, s + "(");
    _generateParenthese(level + 1, max, s + ")");
  }
}
solution(1);

// var s1 = "{}";
// var s2 = "{{{}]";
// var s3 = "{}[]()";
// var s4 = "{[()]}";
// var s5 = " {";
// console.log(isValid(s1));
// console.log(isValid(s2));
// console.log(isValid(s3));
// console.log(isValid(s4));
// console.log(isValid(s5));
