// https://leetcode-cn.com/problems/implement-strstr/
// 实现 字符串 indexOf 函数

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  const needleLen = needle.length;
  const haystackLen = haystack.length;
  if (needleLen > haystackLen) return -1;
  for (let i = 0; i < haystackLen - needleLen + 1; i++) {
    if (haystack.substring(i, needleLen + i) === needle) return i;
  }
  return -1;
};
