// 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法，会超时，
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = -Infinity,
    tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = 0;
    for (let j = i; j < nums.length; j++) {
      tmp += nums[j];
      max = Math.max(tmp, max);
    }
  }
  return max;
};

// 动态规划，参考答案
var maxSubArray1 = function (nums) {
  if (nums.length === 1) return nums[0];
  let pre = 0,
    maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    maxSum = Math.max(pre, maxSum);
  }
  return maxSum;
};

// 动态规划，自写
var maxSubArray2 = function (nums) {
  if (nums.length === 1) return nums[0];
  let dp = [];
  let maxSum = nums[0];
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    // 上一个状态值
    tmp = Math.max(tmp + nums[i], nums[i]);
    // 当前状态值
    maxSum = Math.max(tmp, maxSum);
    dp[i] = maxSum;
  }
  console.log(dp.sort());
  console.log(dp.sort().length);
  return dp.sort((a, b) => a - b)[dp.length - 1];
};

// var nums = [1, -1, 2];
var nums = [1, -1, 2, 3, -1, 1, 0, -2, 5, 11];
// var nums = [-2, 1];
var res = maxSubArray2(nums);
console.log(res);

// 分治算法
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
};

const getInfo = (a, l, r) => {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
};

var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};
