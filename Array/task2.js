function sumArray(arr) {
  let res = arr.reduce((a, b) => a + b);
  return res;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([-1, 0, 1])); // 0
