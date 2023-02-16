/*
Given a three digit number. Find the sum of its digits.

Дано трехзначное число. Найдите сумму его цифр.

Рақами се рақам дода шудааст. Ҷамъи рақамҳои онро ёбед.
*/

function sumOfDigits(num) {
  let a = num % 2; // 1
  let b = (num / 10) % 10; // 2
  let c = num % 10; // 3

  return Math.floor(a + b + c);
}

console.log(sumOfDigits(123));
