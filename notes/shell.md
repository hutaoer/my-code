# 终端

## curl
* [post请求](http://stackoverflow.com/questions/7172784/how-to-post-json-data-with-curl-from-terminal-commandline-to-test-spring-rest)

## git简写
```
find_current_branch() {
	head=$(< .git/HEAD)
	if [[ $head = ref:\ refs/heads/* ]]; then
        git_branch="${head#*/*/}"
    elif [[ $head != '' ]]; then
        git_branch=" "
    else
        git_branch=" "
    fi
}
```
```
alias gpull="find_current_branch;git pull origin $git_branch"
```
```
alias gpush="find_current_branch;git push origin $git_branch"
```