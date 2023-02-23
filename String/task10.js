/*
Создайте функцию, которая принимает строку и возвращает 
строку, в которой каждый символ повторяется один раз.
*/

function countVowels(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str.charAt(i).repeat(2);
  }
  return res;
}
console.log(countVowels("String"));

