// 递归实现
var preorderTraversal = function (root) {
  if (!root) return [];
  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right));
};
