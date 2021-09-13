var reverseStr = function (str) {
  if (str.length === 1) return str;
  return reverseStr(str.substring(1)) + str[0];
};

var str = "abcdefg";
console.log(reverseStr(str));
