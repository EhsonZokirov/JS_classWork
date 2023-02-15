/*
Write a program to print the factorial of given number 

Напишите программу, выводящую факториал заданного числа

Программаи чопи факториали адади додашударо нависед
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
