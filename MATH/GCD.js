function gcd(a, b) {
  let res = 0;
  for (let i = 0; i < i < a && i < b; i++) {
    if (a % i == 0 && b % i == 0) {
      res = i;
    }
  }
  return res;
}
console.log(gcd(32, 8));
