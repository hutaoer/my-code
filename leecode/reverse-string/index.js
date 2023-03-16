// https://leetcode-cn.com/problems/reverse-string/
// 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  if (len === 1 || len === 0) return s;
  let tmp;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    tmp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = tmp;
  }
  return s;
};

// 双指针
var reverseString1 = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
