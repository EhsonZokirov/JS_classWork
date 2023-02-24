function removeDups(arr) {
  let arr2 = [...new Set(arr)];
  return arr2;
}
console.log(removeDups(["John", "Taylor", "John"])); // [ 'John', 'Taylor' ]
