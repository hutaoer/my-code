/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let res = [];
  while (nums1.length || nums2.length) {
    if (nums1.length === 0) {
      res.push(nums2.shift());
      // res = res.concat(nums2);
      continue;
    }
    if (nums2.length === 0) {
      res.push(nums1.shift());
      continue;
      // res = res.concat(nums1);
      // nums1.length = 0;
    }
    const a = nums1[0];
    const b = nums2[0];
    if (a < b) {
      res.push(nums1.shift());
    } else {
      res.push(nums2.shift());
    }
  }
  return res;
};

var merge1 = function (nums1, m, nums2, n) {
  // 这种解法连m都用不到
  // 这显然不是出题人的意思
  if (n === 0) return;
  let current2 = 0;
  for (let i = nums1.length - 1; i >= nums1.length - n; i--) {
    nums1[i] = nums2[current2++];
  }
  nums1.sort((a, b) => a - b); // 当然你可以自己写排序，这里懒得写了，因为已经偏离了题目本身
};

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;
var res = merge(nums1, m, nums2, n);
console.log(res);
