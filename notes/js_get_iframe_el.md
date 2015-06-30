# 获取父页面iframe里面的元素

## 方法
* 获取iframe的window对象，topWin = window.top.document.getElementById('iframe_id').contentWindow
* 获取ele, topWin.document.getElementById('ele');