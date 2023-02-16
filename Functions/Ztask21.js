function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(10)(20)); // 30
console.log(add(0)(20)); // 20
console.log(add(-30)(80)); // 50
