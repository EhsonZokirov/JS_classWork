/*

Массив является особым, если каждый четный индекс содержит четное число,
а каждый нечетный индекс содержит нечетное число.
Создайте функцию, которая возвращает true, если массив особенный,
и false в противном случае.

*/

function isSpecialArray(arr) {
  let arr2 = [];
  let even = 0;
  let odd = 0;
  arr2 = arr.map((e, i) => {
    if (e % 2 === 0 && i % 2 === 0) {
      even++;
    } else odd++;
  });
  return even == odd;
}
// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // true
console.log(isSpecialArray([2, 1, 4])); // false
