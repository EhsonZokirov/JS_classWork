function repeatString(str = "", x) {
  if (x == 1) {
    return x;
  }
  return x * repeatString(str, x - 1);
}

console.log(repeatString("ab", 3));
