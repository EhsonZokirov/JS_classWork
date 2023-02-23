function drop(arr, num) {
  return arr.slice(num);
}
console.log(drop([1, 2, 3], 1)); // [2,3]
console.log(drop([1, 2, 3], 2)); // [3]
