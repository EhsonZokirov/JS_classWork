/* 
Создайте функцию, которая находит слово «бомба» в заданной 
строке (без учета регистра). Если найдено, верните «Yes!!!», в 
противном случае верните «Бомбы нет, расслабьтесь».
*/

function findBomb(str) {
  let str2 = str.split(" ");
  if (str.includes("bomb")) {
    return "YES!";
  }
  return "Relax!";
}

console.log(findBomb("There is a bomb.")); // YES
console.log(findBomb("There is a boom.")); // Relax
