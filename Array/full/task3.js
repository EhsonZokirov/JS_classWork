function mirror(arr) {
  let arr2 = [...arr];
  return arr.concat(arr2.reverse().slice(1));
}
console.log(mirror([0, 2, 6])); // [ 0, 2, 4, 6, 4, 2 ,0]
