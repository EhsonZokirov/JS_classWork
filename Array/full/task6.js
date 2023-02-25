function reverseArr(arr) {
  let res = [];
  let arr2 = arr.toString().split("").reverse();
  arr2.filter((e) => res.push(Number(e)));

  return res;
}
console.log(reverseArr(12345));
