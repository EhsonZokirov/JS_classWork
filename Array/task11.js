/*
 Учитывая массив чисел, вернуть массив,
 содержащий все четные числа,
 если исходный массив также имеет четные индексы
*/

function getOnlyEvens(arr) {
  let res = [];
  arr.filter((e, i) => {
    if (e % 2 == 0 && i % 2 == 0) {
      res.push(e);
    }
  });
  return res;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); // [2,4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])); // [0,2,4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])); // []
