// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var set = new Set()
  for(var item of nums) {
    if(set.has(item)) return true
    set.add(item)
  }
  return false
};