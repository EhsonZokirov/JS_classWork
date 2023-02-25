function removeDups(arr) {
  return [...new Set(arr)];
}
console.log(removeDups(["John", "Taylor", "John"])); // [ 'John', 'Taylor' ]
