/* Для заданного массива плиток эрудита создайте функцию, 
которая выводит максимально возможное количество 
очков, которое может набрать игрок, суммируя общее 
количество очков для всех плиток в его руке. Каждая рука 
содержит 7 плиток скрэббл.
*/

let arrObj = [
  { title: "N", score: "1" },
  { title: "K", score: "5" },
  { title: "Z", score: "10" },
  { title: "X", score: "8" },
  { title: "D", score: "2" },
  { title: "A", score: "1" },
  { title: "E", score: "1" },
];

function score(arr) {
  let res = arr.map((e) => {
    return Number(e.score);
  });
  return res.reduce((a, b) => a + b);
}

console.log(score(arrObj)); // 28
