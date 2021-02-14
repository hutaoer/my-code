const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, 9));

const twoSumCopy = (arr, t) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const diff = t - arr[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSumCopy(nums, 9));
