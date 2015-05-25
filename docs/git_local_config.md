# git编辑local config

## 描述
* 发现自己在github上的commit一直无法显示，参考[github help](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/)。因为自己的user.name和user.email被全局配置给覆盖了，全局配置的name和email(其实主要是email)，并不是跟我github账号相关的email地址。

## 解决
* 当然不能修改全局的配置，那么只需要修改local config即可。
* 可以通过 git config --local -e 直接编辑源文件
* 也可以通过 git config --local user.name your_name 修改user.name
* git config --local user.email your@email.com 修改user.email

## 扩展

### 查看自己的配置
* 系统级配置：git config --system -l
* 全局配置：git config --global -l
* 本地仓库配置：git config --local -l

### 配置优先级
* local > global > system

### 阅读
* 自己之前写过一篇git config的使用，[博客链接](http://blog.csdn.net/hutaoer06051/article/details/8275069)