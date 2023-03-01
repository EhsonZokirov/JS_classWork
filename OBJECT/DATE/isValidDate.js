/*
Учитывая параметры день, месяц и год, верните, является ли эта дата допустимой датой.
*/

function isValidDate(date) {
  let date2 = new Date(date);
  return;
}
console.log(isValidDate(35, 2, 2020)); // false
// February doesn't have 35 days.
console.log(isValidDate(8, 3, 2020)); // true
// 8th March 2020 is a real date.
console.log(isValidDate(31, 6, 1980)); // false
// June only have 30 daysю
