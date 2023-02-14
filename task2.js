// Finding the maximum of three numbers.
// Нахождения максимума из трех чисел.
// Ёфтани калонтарин адад аз се рақам.

function biges(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else return c;
}
console.log(biges(5, 7, 3));
