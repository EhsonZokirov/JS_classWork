function numberSum(arr) {
  let arr2;
  arr2 = arr.filter((e) => typeof e == "number");
  return arr2.reduce((a, b) => a + b, 0);
}
console.log(numberSum([1, 2, "13", "4", "645"])); // 3
console.log(numberSum([true, false, "13", "4", "645"])); // 0
