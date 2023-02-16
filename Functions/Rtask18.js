// let n = 5;
// let res = 1;
// for (let i = 1; i <= n; i++) {
//   res *= i;
// }
// console.log(res);

function factorial(x) {
  if (x == 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));
