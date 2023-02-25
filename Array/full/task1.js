function evenOrOdd(arr) {
  let arr2 = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return arr2 % 2 == 0 ? "even" : "odd";
}
// console.log(evenOrOdd([1, 1])); // even
console.log(evenOrOdd([])); // even
