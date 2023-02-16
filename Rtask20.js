// let a = 2,
//   b = 4,
//   res = 1;

// for (let i = a; i <= b; i++) {
//   res = i ** a;
// }

// console.log(res);


//// recursion
let res = 1;
function power(a, b) {
  if (b == 1) {
    return a;
  }
  return (res = a * power(a, b - 1));
}
console.log(power(2, 2)); //4
console.log(power(2, 3)); //8
console.log(power(2, 4)); //16
