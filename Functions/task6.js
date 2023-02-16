// Выведите (через пробел) все четные числа от a до b (включительно).

function space(a, b) {
  let evenNumber = '';
  for (let i = a; i <= b; i++) {
    i % 2 == false ? evenNumber += `${i} ` : ' '; // false == 0, 
  }
  return evenNumber;
}
console.log(space(1, 10));
