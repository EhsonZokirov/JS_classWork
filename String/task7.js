/* 

Создайте функцию, которая принимает строку и возвращает 
количество (количество) содержащихся в ней гласных.

*/

function countVowels(str) {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      cnt++;
    }
    if (str[i] == "e") {
      cnt++;
    }
    if (str[i] == "i") {
      cnt++;
    }
    if (str[i] == "o") {
      cnt++;
    }
    if (str[i] == "y") {
      cnt++;
    }
    if (str[i] == "u") {
      cnt++;
    }
  }
  return cnt;
}

console.log(countVowels("Palame"));
