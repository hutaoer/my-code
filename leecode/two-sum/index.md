## 题目地址(1. 两数之和)

- https://leetcode-cn.com/problems/two-sum

## 题目描述

```
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 思路

- 求和转换为求差
- 借助 Map 结构将数组中每个元素及其索引相互对应。有需要查找索引的，可以考虑使用 map
- 以空间换时间，将查找时间从 O(N^2) 降低到 O(N)
