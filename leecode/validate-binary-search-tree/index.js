// const helper = (root, lower, upper) => {
//   if (root === null) {
//       return true;
//   }
//   if (root.val <= lower || root.val >= upper) {
//       return false;
//   }
//   return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
// }
// var isValidBST = function(root) {
//   return helper(root, -Infinity, Infinity);
// };

var helper = function (root, lower, upper) {
  if (root === null) return true;
  if (root.val < lower || root.val > upper) return false;
  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  );
};

var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};
