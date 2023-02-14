/*
    Даны два целых числа A и B. Найти сумму всех целых 
    чисел от A до B включительно.

 */

function sumOfAToB(a, b) {
  let res = 0;
  for (let i = a; i < b; i++) {
    res += i;
  }
  return res;
}

console.log(sumOfAllIntegers(2, 4));
