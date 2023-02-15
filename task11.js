// Вводятся 2 числа: x и d . Подсчитайте и выведите одно число —
// сколько раз цифра d встречается в записи натурального числа x.

function digit(numString = "", b) {
  let res = 0;
  for (let i = numString.length - 1; i >= 0; i--) {
    if (numString[i] == b) {
      res++;
    }
  }
  return res;
}
console.log(digit("101", 1)); // 2
console.log(digit("201", 7)); // 0
