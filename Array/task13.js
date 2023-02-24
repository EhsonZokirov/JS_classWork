function compact(arr) {
  return arr.filter((e) => typeof e === "number" && e > 0);
}
console.log(compact([0, 1, false, 2, "", 3])); // [1,2,3]
console.log(compact([undefined, null, false, NaN, "", 0])); // [] - Пустой массив
