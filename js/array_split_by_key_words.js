/*
  已知数组：arr1 = ['a', 'b', 'c', 'd', 'e', 'a1', 'b1'];
  给定另外一个数组：arr2 = ['a', 'b'];
  将arr1 数组分解成多个数组，数组中的元素分别包含 arr2 中的元素，以及剩余的不含的元素独立为 1 组。
  即得到：
  ['a', 'a1'], ['b', 'b1'], ['c', 'd', 'e'];
*/
'use strict';

let originArr = ['a', 'b', 'c', 'd', 'e', 'a1', 'b1'];
let keyWordsArr = ['a', 'b'];

let tmpArr = [];
let resArr = [];
let groupItem;

for(let i = 0, len = keyWordsArr.length; i < len; i++) {
  let key = keyWordsArr[i];
  if (key) {
    console.log('key:', key);
    resArr[i] = [];
    let tmpItem;
    for(let j = 0, modsLen = originArr.length; j < modsLen; j++) {
      tmpItem = originArr[j];
      let pos = tmpItem.indexOf(key);
      if(pos > -1) {
        resArr[i].push(tmpItem);
        tmpArr.push(tmpItem);
      } 
    }
  }
}

function chaji_array(arr1,arr2){
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
      var flag = true;
      for (var j = 0; j < arr2.length; j++) {
          if (arr2[j] == arr1[i]) {
              flag = false;
          }
      }
      if (flag) {
          arr3.push(arr1[i]);
      }
  }
  return arr3;
}

// 求差集
let leftArr = chaji_array(originArr, tmpArr)

resArr[keyWordsArr.length] = leftArr;

console.log(resArr)