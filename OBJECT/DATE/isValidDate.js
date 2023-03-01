function isValidDate(date) {
  return date.getFullYear();
}

console.log(isValidDate(new Date(35, 2, 2020))); // false
// February doesn't have 35 days.
console.log(isValidDate(new Date(8, 3, 2020))); // true
// 8th March 2020 is a real date.
console.log(isValidDate(new Date(31, 6, 1980))); // false
// June only have 30 daysю
