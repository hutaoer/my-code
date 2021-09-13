function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
  return arr;
}

const a = [1, 2, 3, 4, 5];
reverseArray(a);
console.log(a);
