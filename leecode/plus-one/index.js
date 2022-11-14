/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) {
      let sum = carry + digits[i];
      if (sum > 9) {
        carry = 1;
        digits[i] = sum % 10;
      } else {
        digits[i] = sum;
        carry = 0;
      }
    }
  }
  if (carry === 1) {
    digits.unshift(1); // 如果carry最后停留在1，说明有需要额外的一个长度 所以我们就在首位增添一个 1
  }
  return digits;
};

var a = [9, 9, 9, 9];
var res = plusOne(a);
console.log(a);
