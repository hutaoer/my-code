# form表单提交

## 问题
  <form action="" method="POST">
    <input name="action" value="api/post.php">
    <input type="submit" value="submit">
  </form>

* 以上的这种写法是有问题的。post的url会指向当前的浏览器地址。