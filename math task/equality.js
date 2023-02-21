function equality(a, b, c) {
  if (a == b && a == c) {
    return 3;
  } else if (a == b || b == c || a == c) {
    return 2;
  } else return 0;
}
console.log(equality(3, 0, 0));
