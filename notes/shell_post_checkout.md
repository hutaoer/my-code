#!/bin/bash
num=$(git status | grep 'working directory clean' | wc -l)
# $3 如果$3为1，则代表分支检出；为0，代表文件检出
if [ $3 -eq 1 ]
then
    if [ $num -eq 1 ]
    then
        echo 'nothing to commit, now checkout to branch'
    else
        echo -e "\e[1;32m you can't checkout now, save your changes \e[0m"
        exit 1
    fi
else
    echo 'now you are checkout files'
fi