/* 

Дано целое число n. Выведите следующее за 
ним четное число. При решении этой задачи нельзя использовать 
условную инструкцию if и циклы. 

*/

function evenNumber(num) {
  return num - (num % 2) + 2;
}
console.log(evenNumber(3));
