/* 
Создайте функцию, которая принимает месяц и год (в виде целых чисел) 
и возвращает количество дней в этом месяце.
*/

function days(month, year) {
  let date = new Date(year, month, 0);
  return date.getDate();
}
console.log(days(2, 2023)); // 28
console.log(days(4, 2018)); // 30
console.log(days(2, 654)); // 28
console.log(days(2, 1000)); // 28
