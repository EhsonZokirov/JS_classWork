function filterArray(arr) {
  let res = [];
  arr.filter((e) => {
    typeof e == "number" ? res.push(e) : null;
  });
  return res;
}
console.log(filterArray([1, 2, "a", "b"])); // [1,2]
console.log(filterArray(["1", "2", "a", "b"])); // [1,2]
console.log(filterArray([1, "a", "b", 0, 15])); // [1,0,105]
