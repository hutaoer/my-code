# window.scrollY and window.pageYOffset

## window.scrollY
* window.scrollY是文档从顶部开始滚动过的像素值。

## 回到顶部的方法
* window.scroll(0, 0);

## pageYOffset
* pageYOffset 属性是 scrollY 属性的别名，即两个值相等。

## 兼容性
* 旧版本IE（<9）两个属性都不支持，必须使用其他的非标准属性。
* 兼容代码：var y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

## demo
* [link](https://github.com/hutaoer/my-code/blob/master/pages/scrollY_and_pageYOffset.html)