/*
Напишите функцию, которая принимает целое число i и 
возвращает целое число с целым числом в обратном порядке, за 
которым следует исходное целое число.
*/

function reverseAndNot(x) {
  return +(x.toString().split("").reverse().join("") + x);
}

console.log(reverseAndNot(123)); // 321123
