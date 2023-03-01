function isRange(num, obj) {
  if (num > obj.min && num < obj.max) {
    return true;
  }
  return false;
}
console.log(isRange(4, { min: 0, max: 5 })); // true
console.log(isRange(4, { min: 6, max: 10 })); // true
