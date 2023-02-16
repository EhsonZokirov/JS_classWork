function product(a1, b1) {
  // 1,2
  return function (a2, b2) {
    // 1,1
    return function (a3, b3) {
      // 2,3
      return a1 * a2 * a3 + b1 * b2 * b3;
    };
  };
}

console.log(product(1, 2)(1, 1)(2, 3)); // 8
console.log(product(1, 2)(0, 3)(3, 0)); // 0
