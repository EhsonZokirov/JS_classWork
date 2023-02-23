function indexMultiplier(arr) {
  let res = 0;
  arr.map((e, i) => {
    res += e * i;
  }, 0);
  return res;
}
console.log(indexMultiplier([1, 2, 3, 4, 5])); // 40
console.log(indexMultiplier([-3, 0, 8, -6])); // -2
