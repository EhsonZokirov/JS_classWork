function sumNumbers(a = 0) {
  return function (b = 0) {
    return function (c = 0) {
      return function (d = 0) {
        return function (e = 0) {
          return function (f = 0) {
            return a + b + c + d + e + f;
          };
        };
      };
    };
  };
}

console.log(sumNumbers(1)(2)()()(23)()); // 26
console.log(sumNumbers(1)(2)(3)(4)(5)(6)); // 21
